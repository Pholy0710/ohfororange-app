"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { TREASURE_TRAIL_CLUES } from "@/data/games";
import { StarRating } from "@/components/shared/StarRating";
import { AudioButton } from "@/components/shared/AudioButton";
import { OrangeMascot } from "@/components/shared/OrangeMascot";

const CHOICES_MAP: Record<string, { word: string; emoji: string }[]> = {
  sun: [
    { word: "sun", emoji: "☀️" },
    { word: "ball", emoji: "⚽" },
    { word: "fish", emoji: "🐟" },
    { word: "duck", emoji: "🦆" },
  ],
  apple: [
    { word: "apple", emoji: "🍎" },
    { word: "dog", emoji: "🐶" },
    { word: "hat", emoji: "🎩" },
    { word: "cup", emoji: "☕" },
  ],
  tree: [
    { word: "tree", emoji: "🌳" },
    { word: "ball", emoji: "⚽" },
    { word: "cake", emoji: "🎂" },
    { word: "sock", emoji: "🧦" },
  ],
  penguin: [
    { word: "penguin", emoji: "🐧" },
    { word: "hat", emoji: "🎩" },
    { word: "cake", emoji: "🎂" },
    { word: "book", emoji: "📚" },
  ],
  nest: [
    { word: "nest", emoji: "🪺" },
    { word: "ball", emoji: "⚽" },
    { word: "car", emoji: "🚗" },
    { word: "milk", emoji: "🥛" },
  ],
  igloo: [
    { word: "igloo", emoji: "🏔️" },
    { word: "dog", emoji: "🐶" },
    { word: "hat", emoji: "🎩" },
    { word: "cup", emoji: "☕" },
  ],
};

export default function TreasureTrailGame() {
  const [clueIdx, setClueIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [coins, setCoins] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [complete, setComplete] = useState(false);

  const clue = TREASURE_TRAIL_CLUES[clueIdx];
  const choices = CHOICES_MAP[clue.answer] || [];

  const handleChoice = (word: string) => {
    setSelected(word);
    if (word === clue.answer) {
      setResult("correct");
      setScore((s) => s + 1);
      setCoins((c) => c + 10);
      setTimeout(() => {
        if (clueIdx < TREASURE_TRAIL_CLUES.length - 1) {
          setClueIdx((i) => i + 1);
          setSelected(null);
          setResult(null);
        } else {
          setComplete(true);
        }
      }, 1500);
    } else {
      setResult("wrong");
      setTimeout(() => { setSelected(null); setResult(null); }, 800);
    }
  };

  if (complete) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-6 text-center">
        <Link href="/games" className="btn-secondary py-2 px-4 text-sm inline-block mb-6">← Games</Link>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-white rounded-3xl shadow-card p-8 border border-orange-100">
          <motion.div className="text-7xl mb-3 animate-bounce-gentle">🏆</motion.div>
          <h2 className="text-2xl font-black text-[#FF6B2B]">Treasure Found!</h2>
          <p className="text-gray-600 font-bold mt-1">You completed the Treasure Trail!</p>
          <div className="mt-4 bg-yellow-50 rounded-2xl p-4 border border-yellow-200">
            <div className="text-3xl font-black text-yellow-600">🪙 {coins} coins!</div>
          </div>
          <StarRating stars={score >= 5 ? 3 : score >= 3 ? 2 : 1} size="lg" className="justify-center mt-3" />
          <OrangeMascot size="md" expression="cheering" message="You're a Treasure Trail Champion!" className="mt-4" />
          <button
            className="btn-primary mt-6 w-full"
            onClick={() => { setClueIdx(0); setScore(0); setCoins(0); setComplete(false); setSelected(null); setResult(null); }}
          >
            Play Again! 🔄
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center gap-3 mb-4">
        <Link href="/games" className="btn-secondary py-2 px-4 text-sm">← Games</Link>
        <h1 className="flex-1 text-center text-xl font-black text-gray-800">🗺️ Treasure Trail</h1>
        <div className="flex gap-2">
          <div className="bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-200">
            <span className="font-black text-yellow-600">🪙 {coins}</span>
          </div>
        </div>
      </div>

      {/* Trail Progress */}
      <div className="flex gap-2 mb-6 items-center">
        {TREASURE_TRAIL_CLUES.map((_, i) => (
          <div key={i} className="flex items-center gap-2 flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black transition-all
                         ${i < clueIdx ? "bg-green-400 text-white" :
                           i === clueIdx ? "bg-[#FF6B2B] text-white" :
                           "bg-gray-200 text-gray-400"}`}
            >
              {i < clueIdx ? "✓" : i + 1}
            </div>
            {i < TREASURE_TRAIL_CLUES.length - 1 && (
              <div className={`flex-1 h-1 rounded-full ${i < clueIdx ? "bg-green-400" : "bg-gray-200"}`} />
            )}
          </div>
        ))}
        <div className="w-8 h-8 text-xl flex items-center justify-center">🏆</div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={clueIdx} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
          {/* Clue card */}
          <div className="bg-gradient-to-br from-[#FFD93D] to-[#FF6B2B] rounded-3xl p-6 text-white text-center mb-6 shadow-card">
            <div className="text-5xl mb-3">🗺️</div>
            <p className="text-sm font-bold opacity-90 mb-1">Clue {clueIdx + 1} of {TREASURE_TRAIL_CLUES.length}</p>
            <h2 className="text-xl font-black">{clue.clue}</h2>
            <div className="mt-3 bg-white/20 rounded-2xl p-3">
              <p className="text-sm font-bold">💡 {clue.hint}</p>
            </div>
            <div className="mt-3 flex justify-center">
              <AudioButton text={clue.clue} size="sm" label="Hear clue" />
            </div>
          </div>

          {/* Choices */}
          <div className="grid grid-cols-2 gap-4">
            {choices.map(({ word, emoji }) => {
              const isSelected = selected === word;
              const correct = word === clue.answer;
              return (
                <motion.button
                  key={word}
                  className={`p-5 rounded-2xl border-2 text-center font-black transition-all
                             ${isSelected
                               ? correct ? "bg-green-100 border-green-400 text-green-700" : "bg-red-100 border-red-300 text-red-500"
                               : "bg-white border-orange-100 hover:border-orange-300 text-gray-700"}`}
                  onClick={() => handleChoice(word)}
                  disabled={result !== null}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-5xl mb-2">{emoji}</div>
                  <div className="text-lg">{word}</div>
                  {isSelected && <div className="text-2xl mt-1">{correct ? "✅" : "❌"}</div>}
                </motion.button>
              );
            })}
          </div>

          {result === "correct" && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-4 bg-green-50 rounded-2xl p-4 text-center border border-green-200">
              <div className="text-4xl">🪙</div>
              <p className="font-black text-green-600 text-lg">+10 coins! Keep going!</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
