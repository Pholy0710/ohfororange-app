"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { BUILD_WORD_LEVELS } from "@/data/games";
import { StarRating } from "@/components/shared/StarRating";
import { AudioButton } from "@/components/shared/AudioButton";

export default function BuildWordGame() {
  const [levelIdx, setLevelIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [gameComplete, setGameComplete] = useState(false);

  const level = BUILD_WORD_LEVELS[levelIdx];
  const choices = ["a", "e", "i", "o", "u", level.answer]
    .filter((v, i, arr) => arr.indexOf(v) === i)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  const handleChoice = (vowel: string) => {
    setSelected(vowel);
    if (vowel === level.answer) {
      setResult("correct");
      setScore((s) => s + 1);
      setTimeout(() => {
        if (levelIdx < BUILD_WORD_LEVELS.length - 1) {
          setLevelIdx((i) => i + 1);
          setSelected(null);
          setResult(null);
        } else {
          setGameComplete(true);
        }
      }, 1200);
    } else {
      setResult("wrong");
      setTimeout(() => { setSelected(null); setResult(null); }, 800);
    }
  };

  if (gameComplete) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-6 text-center">
        <Link href="/games" className="btn-secondary py-2 px-4 text-sm inline-block mb-6">← Games</Link>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-white rounded-3xl shadow-card p-8 border border-orange-100">
          <div className="text-7xl mb-4">🏆</div>
          <h2 className="text-3xl font-black text-[#FF6B2B]">Word Builder Champion!</h2>
          <StarRating stars={score >= 9 ? 3 : score >= 6 ? 2 : 1} size="lg" className="justify-center mt-3" />
          <p className="text-gray-600 font-bold mt-2">{score}/10 correct!</p>
          <button
            className="btn-primary mt-6 w-full"
            onClick={() => { setLevelIdx(0); setScore(0); setGameComplete(false); setSelected(null); setResult(null); }}
          >
            Play Again! 🔄
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/games" className="btn-secondary py-2 px-4 text-sm">← Games</Link>
        <div className="flex-1 text-center">
          <h1 className="text-xl font-black text-gray-800">🏗️ Build the Word</h1>
        </div>
        <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-200">
          <span className="font-black text-yellow-600">{levelIdx + 1}/{BUILD_WORD_LEVELS.length}</span>
        </div>
      </div>

      {/* Progress */}
      <div className="flex gap-1.5 mb-6">
        {BUILD_WORD_LEVELS.map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-all ${
              i < levelIdx ? "bg-green-400" : i === levelIdx ? "bg-[#FF6B2B]" : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      <motion.div
        key={levelIdx}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        className="bg-white rounded-3xl shadow-card p-8 border border-orange-100 text-center"
      >
        {/* Picture and hint */}
        <div className="text-8xl mb-3">{level.emoji}</div>
        <p className="text-gray-500 font-bold text-sm mb-6">{level.hint}</p>

        {/* Word with blank */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {level.blanks.map((slot, i) => (
            <div key={i} className="flex items-center gap-2">
              {slot === "_" ? (
                <motion.div
                  className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center text-2xl font-black
                             ${result === "correct" ? "bg-green-100 border-green-400 text-green-700" :
                               result === "wrong" ? "bg-red-100 border-red-400 text-red-400" :
                               selected ? "bg-[#FF6B2B] border-[#FF6B2B] text-white" :
                               "border-dashed border-orange-300 bg-orange-50 text-orange-300"}`}
                  animate={result === "correct" ? { scale: [1, 1.3, 1] } : result === "wrong" ? { x: [-5, 5, -5, 0] } : {}}
                >
                  {selected || "_"}
                </motion.div>
              ) : (
                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl font-black text-[#FF6B2B]">
                  {slot}
                </div>
              )}
            </div>
          ))}
        </div>

        {result === "correct" && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mb-4 text-green-600 font-black text-xl">
            🎉 {level.word}! Correct!
          </motion.div>
        )}
        {result === "wrong" && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mb-4 text-red-400 font-bold">
            Try again! 💪
          </motion.div>
        )}

        {/* Vowel choices */}
        <p className="text-sm font-bold text-gray-500 mb-3">Choose the missing letter:</p>
        <div className="flex justify-center gap-3 flex-wrap">
          {choices.map((vowel) => (
            <motion.button
              key={vowel}
              className={`w-14 h-14 rounded-2xl text-2xl font-black transition-all
                         ${selected === vowel
                           ? result === "correct" ? "bg-green-100 text-green-700 border-2 border-green-400" :
                             result === "wrong" ? "bg-red-100 text-red-400 border-2 border-red-300" :
                             "bg-[#FF6B2B] text-white"
                           : "bg-orange-100 text-[#FF6B2B] hover:bg-orange-200 hover:scale-110 active:scale-90"}`}
              onClick={() => handleChoice(vowel)}
              disabled={result !== null}
              whileTap={{ scale: 0.9 }}
            >
              {vowel}
            </motion.button>
          ))}
        </div>

        <div className="mt-4 flex justify-center">
          <AudioButton text={`The word is ${level.word}`} size="sm" label="Hear word" />
        </div>
      </motion.div>

      <div className="mt-4 text-center">
        <p className="font-bold text-gray-500">Score: {score} ⭐</p>
      </div>
    </div>
  );
}
