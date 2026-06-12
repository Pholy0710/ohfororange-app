"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { RHYME_PAIRS } from "@/data/games";
import { StarRating } from "@/components/shared/StarRating";
import { AudioButton } from "@/components/shared/AudioButton";

export default function MatchRhymeGame() {
  const [pairIdx, setPairIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [complete, setComplete] = useState(false);

  const pair = RHYME_PAIRS[pairIdx];
  const choices = [pair.word2, pair.word3, pair.wrong].sort(() => Math.random() - 0.5);

  const handleChoice = (word: string) => {
    setSelected(word);
    const correct = word === pair.word2 || word === pair.word3;
    setResult(correct ? "correct" : "wrong");
    if (correct) {
      setScore((s) => s + 1);
      setTimeout(() => {
        if (pairIdx < RHYME_PAIRS.length - 1) {
          setPairIdx((i) => i + 1);
          setSelected(null);
          setResult(null);
        } else {
          setComplete(true);
        }
      }, 1000);
    } else {
      setTimeout(() => { setSelected(null); setResult(null); }, 800);
    }
  };

  if (complete) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-6 text-center">
        <Link href="/games" className="btn-secondary py-2 px-4 text-sm inline-block mb-6">← Games</Link>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-white rounded-3xl shadow-card p-8 border border-orange-100">
          <div className="text-7xl mb-3">🎵</div>
          <h2 className="text-2xl font-black text-[#FF6B2B]">Rhyme Champion!</h2>
          <StarRating stars={score >= 5 ? 3 : score >= 3 ? 2 : 1} size="lg" className="justify-center mt-3" />
          <p className="text-gray-600 font-bold mt-2">{score}/{RHYME_PAIRS.length} correct!</p>
          <button
            className="btn-primary mt-6 w-full"
            onClick={() => { setPairIdx(0); setScore(0); setComplete(false); setSelected(null); setResult(null); }}
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
        <h1 className="flex-1 text-center text-xl font-black text-gray-800">🎵 Match the Rhyme</h1>
        <div className="bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-200">
          <span className="font-black text-yellow-600">{pairIdx + 1}/{RHYME_PAIRS.length}</span>
        </div>
      </div>

      <motion.div key={pairIdx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        {/* Target word */}
        <div className="bg-white rounded-3xl shadow-card p-8 text-center border border-orange-100">
          <p className="text-sm font-bold text-gray-500 mb-2">Find a word that rhymes with:</p>
          <div className="text-8xl mb-3">{pair.emoji1}</div>
          <div className="text-4xl font-black text-[#FF6B2B]">{pair.word1}</div>
          <div className="flex justify-center mt-3">
            <AudioButton text={pair.word1} size="md" label="Hear it" />
          </div>
        </div>

        {/* Choices */}
        <div className="grid grid-cols-3 gap-4">
          {choices.map((word, i) => {
            const correct = word === pair.word2 || word === pair.word3;
            const isSelected = selected === word;
            const emoji = word === pair.word2 ? pair.emoji2 : word === pair.word3 ? pair.emoji3 : "🐕";
            return (
              <motion.button
                key={word}
                className={`p-5 rounded-2xl border-2 text-center font-black transition-all
                           ${isSelected
                             ? correct
                               ? "bg-green-100 border-green-400 text-green-700"
                               : "bg-red-100 border-red-300 text-red-500"
                             : "bg-white border-orange-100 hover:border-orange-400 text-gray-700"}`}
                onClick={() => handleChoice(word)}
                disabled={result !== null}
                whileTap={{ scale: 0.95 }}
                animate={isSelected && result === "correct" ? { scale: [1, 1.2, 1] } : isSelected && result === "wrong" ? { x: [-4, 4, -4, 0] } : {}}
              >
                <div className="text-4xl mb-2">{emoji}</div>
                <div className="text-xl">{word}</div>
                {isSelected && <div className="text-2xl mt-1">{correct ? "✅" : "❌"}</div>}
              </motion.button>
            );
          })}
        </div>

        <p className="text-center text-sm font-bold text-gray-400">Score: {score} ⭐</p>
      </motion.div>
    </div>
  );
}
