"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { SOUND_HUNT_LEVELS } from "@/data/games";
import { StarRating } from "@/components/shared/StarRating";
import { OrangeMascot } from "@/components/shared/OrangeMascot";

export default function SoundHuntGame() {
  const [levelIdx, setLevelIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameState, setGameState] = useState<"start" | "playing" | "complete">("start");
  const [feedback, setFeedback] = useState<{ idx: number; correct: boolean } | null>(null);

  const level = SOUND_HUNT_LEVELS[levelIdx];

  useEffect(() => {
    if (gameState !== "playing") return;
    if (timeLeft <= 0) {
      setGameState("complete");
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, gameState]);

  const handleTap = (idx: number) => {
    if (tapped.has(idx) || gameState !== "playing") return;
    setTapped((prev) => new Set([...prev, idx]));
    const correct = level.words[idx][0] === level.targetSound;
    setFeedback({ idx, correct });
    if (correct) setScore((s) => s + 1);
    setTimeout(() => setFeedback(null), 500);
  };

  const startGame = () => {
    setGameState("playing");
    setTimeLeft(30);
    setScore(0);
    setTapped(new Set());
    setFeedback(null);
  };

  const nextLevel = () => {
    if (levelIdx < SOUND_HUNT_LEVELS.length - 1) {
      setLevelIdx((i) => i + 1);
      startGame();
    }
  };

  const targetCount = level.words.filter((w) => w[0] === level.targetSound).length;
  const stars = score >= targetCount ? 3 : score >= Math.ceil(targetCount / 2) ? 2 : score > 0 ? 1 : 0;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Link href="/games" className="btn-secondary py-2 px-4 text-sm">← Games</Link>
        <div className="flex-1 text-center">
          <h1 className="text-xl font-black text-gray-800">🎯 Sound Hunt</h1>
        </div>
        <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-200">
          <span>⭐</span>
          <span className="font-black text-yellow-600">{score}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* START SCREEN */}
        {gameState === "start" && (
          <motion.div key="start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
            <div className="bg-white rounded-3xl shadow-card p-8 border border-orange-100">
              <div className="text-7xl mb-4">🎯</div>
              <h2 className="text-2xl font-black text-gray-800">Sound Hunt!</h2>
              <p className="text-gray-500 font-bold mt-2">
                Tap ALL pictures that start with the target sound!
              </p>
              <div className="mt-4 p-4 bg-orange-50 rounded-2xl">
                <p className="text-sm font-bold text-gray-600">Level {levelIdx + 1}</p>
                <div className="text-5xl font-black text-[#FF6B2B] mt-1">
                  /{level.targetSound}/
                </div>
              </div>
              <OrangeMascot size="md" expression="excited" message={`Find things starting with /${level.targetSound}/!`} className="mt-4" />
            </div>
            <button className="btn-primary w-full mt-4 text-xl py-4" onClick={startGame}>
              Start Hunting! 🎯
            </button>
          </motion.div>
        )}

        {/* PLAYING SCREEN */}
        {gameState === "playing" && (
          <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* Target Sound */}
            <div className="bg-white rounded-2xl shadow-soft p-4 mb-4 border border-orange-100 text-center">
              <p className="text-sm font-bold text-gray-500">Find pictures starting with:</p>
              <div className="text-5xl font-black text-[#FF6B2B]">/{level.targetSound}/</div>
            </div>

            {/* Timer */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#FF6B2B] to-[#FFD93D] rounded-full"
                  initial={{ width: "100%" }}
                  animate={{ width: `${(timeLeft / 30) * 100}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div className={`font-black text-lg min-w-[40px] ${timeLeft <= 10 ? "text-red-500" : "text-gray-700"}`}>
                {timeLeft}s
              </div>
            </div>

            {/* Picture Grid */}
            <div className="grid grid-cols-4 gap-3">
              {level.emojis.map((emoji, idx) => {
                const wasTapped = tapped.has(idx);
                const isCorrect = level.words[idx][0] === level.targetSound;
                const fb = feedback?.idx === idx;

                return (
                  <motion.button
                    key={idx}
                    className={`aspect-square rounded-2xl flex flex-col items-center justify-center
                               gap-1 text-4xl border-2 transition-all shadow-soft
                               ${wasTapped
                                 ? isCorrect
                                   ? "bg-green-100 border-green-400"
                                   : "bg-red-100 border-red-300 opacity-70"
                                 : "bg-white border-orange-100 hover:border-orange-400 active:scale-90"}`}
                    onClick={() => handleTap(idx)}
                    animate={fb ? { scale: [1, 1.3, 1] } : {}}
                    disabled={wasTapped}
                  >
                    {emoji}
                    {wasTapped && (
                      <span className="text-sm">{isCorrect ? "✅" : "❌"}</span>
                    )}
                  </motion.button>
                );
              })}
            </div>
            <div className="mt-3 text-center font-bold text-gray-500 text-sm">
              Score: {score} 🌟 | Find {targetCount} /{level.targetSound}/ pictures!
            </div>
          </motion.div>
        )}

        {/* COMPLETE SCREEN */}
        {gameState === "complete" && (
          <motion.div key="complete" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
            <div className="bg-white rounded-3xl shadow-card p-8 border border-orange-100">
              <div className="text-7xl mb-4">{score >= targetCount ? "🏆" : score > 0 ? "🎉" : "💪"}</div>
              <h2 className="text-2xl font-black text-gray-800">
                {score >= targetCount ? "Perfect Hunt!" : score > 0 ? "Great Job!" : "Good Try!"}
              </h2>
              <StarRating stars={stars} size="lg" className="justify-center mt-3" />
              <p className="text-gray-600 font-bold mt-2">
                You found {score} out of {targetCount} /{level.targetSound}/ pictures!
              </p>
              <OrangeMascot size="md" expression="cheering" className="mt-4" />
            </div>
            <div className="flex gap-3 mt-4">
              <button className="btn-secondary flex-1 text-sm" onClick={startGame}>Try Again 🔄</button>
              {levelIdx < SOUND_HUNT_LEVELS.length - 1 && (
                <button className="btn-primary flex-1 text-sm" onClick={nextLevel}>
                  Level {levelIdx + 2} →
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
