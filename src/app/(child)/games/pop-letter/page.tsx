"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { POP_LETTER_LEVELS } from "@/data/games";
import { StarRating } from "@/components/shared/StarRating";

interface Balloon {
  id: number;
  letter: string;
  x: number;
  speed: number;
  color: string;
  popped: boolean;
  missed: boolean;
}

const BALLOON_COLORS = ["#FF6B2B", "#6BC5F8", "#FFD93D", "#6BCFB5", "#B57BEB", "#FF8FAB", "#52C97A"];

export default function PopLetterGame() {
  const [levelIdx, setLevelIdx] = useState(0);
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [gameState, setGameState] = useState<"start" | "playing" | "complete">("start");
  const [timeLeft, setTimeLeft] = useState(30);
  const balloonIdRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const level = POP_LETTER_LEVELS[levelIdx];

  useEffect(() => {
    if (gameState !== "playing") return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) { setGameState("complete"); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameState]);

  useEffect(() => {
    if (gameState !== "playing") return;
    intervalRef.current = setInterval(() => {
      const randomLetter = level.letters[Math.floor(Math.random() * level.letters.length)];
      const newBalloon: Balloon = {
        id: ++balloonIdRef.current,
        letter: randomLetter,
        x: Math.random() * 80 + 10,
        speed: Math.random() * 4 + 4,
        color: BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)],
        popped: false,
        missed: false,
      };
      setBalloons((prev) => [...prev.slice(-15), newBalloon]);
    }, 800);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [gameState, level.letters]);

  const popBalloon = (id: number, letter: string) => {
    if (letter === level.targetLetter) {
      setScore((s) => s + 1);
      setBalloons((prev) => prev.map((b) => b.id === id ? { ...b, popped: true } : b));
    } else {
      setMisses((m) => m + 1);
    }
  };

  const removeBalloon = (id: number) => {
    setBalloons((prev) => {
      const balloon = prev.find((b) => b.id === id);
      if (balloon && !balloon.popped && balloon.letter === level.targetLetter) {
        setMisses((m) => m + 1);
      }
      return prev.filter((b) => b.id !== id);
    });
  };

  const startGame = () => {
    setBalloons([]);
    setScore(0);
    setMisses(0);
    setTimeLeft(level.timeLimit || 30);
    setGameState("playing");
  };

  const stars = score >= 8 ? 3 : score >= 5 ? 2 : score >= 2 ? 1 : 0;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center gap-3 mb-4">
        <Link href="/games" className="btn-secondary py-2 px-4 text-sm">← Games</Link>
        <div className="flex-1 text-center">
          <h1 className="text-xl font-black text-gray-800">🎈 Pop the Letter!</h1>
        </div>
        <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-200">
          <span>⭐</span><span className="font-black text-yellow-600">{score}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {gameState === "start" && (
          <motion.div key="start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
            <div className="bg-white rounded-3xl shadow-card p-8 border border-orange-100">
              <div className="text-7xl mb-4 animate-bounce-gentle">🎈</div>
              <h2 className="text-2xl font-black text-gray-800">Pop the Letter!</h2>
              <p className="text-gray-500 font-bold mt-2">Pop ONLY balloons with the letter:</p>
              <div className="text-7xl font-black text-[#FF6B2B] mt-3 animate-float">
                {level.targetLetter}
              </div>
              <p className="text-gray-400 font-bold text-sm mt-3">Level {levelIdx + 1} | {level.timeLimit}s</p>
            </div>
            <button className="btn-primary w-full mt-4 text-xl py-4" onClick={startGame}>
              Pop! 🎈
            </button>
          </motion.div>
        )}

        {gameState === "playing" && (
          <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Stats bar */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#FF6B2B] to-[#FFD93D] rounded-full"
                  animate={{ width: `${(timeLeft / (level.timeLimit || 30)) * 100}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <span className={`font-black ${timeLeft <= 10 ? "text-red-500" : "text-gray-700"}`}>{timeLeft}s</span>
              <span className="text-xs font-bold text-gray-400">❌ {misses}</span>
            </div>

            {/* Target */}
            <div className="bg-white rounded-2xl p-2 text-center mb-2 border border-orange-100">
              <span className="text-sm font-bold text-gray-500">Pop: </span>
              <span className="text-3xl font-black text-[#FF6B2B]">{level.targetLetter}</span>
            </div>

            {/* Balloon arena */}
            <div className="relative bg-gradient-to-b from-sky-100 to-sky-50 rounded-3xl overflow-hidden border-2 border-sky-200" style={{ height: 350 }}>
              <AnimatePresence>
                {balloons.filter((b) => !b.popped).map((balloon) => (
                  <motion.button
                    key={balloon.id}
                    className="absolute cursor-pointer select-none"
                    style={{ left: `${balloon.x}%`, bottom: 0 }}
                    initial={{ y: 0 }}
                    animate={{ y: -380 }}
                    transition={{ duration: balloon.speed, ease: "linear" }}
                    onAnimationComplete={() => removeBalloon(balloon.id)}
                    onClick={() => popBalloon(balloon.id, balloon.letter)}
                  >
                    <div className="relative">
                      <div
                        className="w-16 h-20 rounded-full flex items-center justify-center
                                   text-white text-3xl font-black shadow-lg hover:scale-110 transition-transform"
                        style={{ backgroundColor: balloon.color }}
                      >
                        {balloon.letter}
                      </div>
                      <div
                        className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1 h-6"
                        style={{ backgroundColor: balloon.color }}
                      />
                    </div>
                  </motion.button>
                ))}

                {balloons.filter((b) => b.popped).map((balloon) => (
                  <motion.div
                    key={`pop-${balloon.id}`}
                    className="absolute pointer-events-none"
                    style={{ left: `${balloon.x}%`, top: "40%" }}
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-4xl">💥</span>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Score overlay */}
              <div className="absolute top-3 right-3 bg-white/80 rounded-xl px-3 py-1">
                <span className="font-black text-[#FF6B2B]">⭐ {score}</span>
              </div>
            </div>
          </motion.div>
        )}

        {gameState === "complete" && (
          <motion.div key="complete" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
            <div className="bg-white rounded-3xl shadow-card p-8 border border-orange-100">
              <div className="text-7xl mb-3">{score >= 8 ? "🏆" : "🎉"}</div>
              <h2 className="text-2xl font-black text-gray-800">
                {score >= 8 ? "Letter Master!" : "Great Popping!"}
              </h2>
              <StarRating stars={stars} size="lg" className="justify-center mt-3" />
              <p className="text-gray-600 font-bold mt-2">You popped {score} balloons! ❌ {misses} missed</p>
            </div>
            <div className="flex gap-3 mt-4">
              <button className="btn-secondary flex-1" onClick={startGame}>Try Again 🔄</button>
              {levelIdx < POP_LETTER_LEVELS.length - 1 && (
                <button className="btn-primary flex-1" onClick={() => { setLevelIdx((i) => i + 1); setGameState("start"); }}>
                  Next Level →
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
