"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ALPHABET_DATA } from "@/data/letters";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.04 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 400 } },
};

export default function LettersPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-6xl mb-3"
        >
          🔤
        </motion.div>
        <h1 className="section-title">The Alphabet!</h1>
        <p className="text-gray-500 font-bold">Tap a letter to learn all about it</p>
      </div>

      <motion.div
        className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {ALPHABET_DATA.map((letterData) => (
          <motion.div key={letterData.letter} variants={item}>
            <Link href={`/letters/${letterData.letter.toLowerCase()}`}>
              <div
                className="aspect-square rounded-2xl flex flex-col items-center justify-center
                           shadow-card hover:shadow-card-hover hover:scale-110 active:scale-95
                           transition-all duration-200 cursor-pointer p-2"
                style={{ backgroundColor: letterData.bgColor }}
              >
                <div
                  className="text-3xl sm:text-4xl font-black leading-none"
                  style={{ color: letterData.color }}
                >
                  {letterData.uppercase}
                </div>
                <div
                  className="text-xl sm:text-2xl font-bold"
                  style={{ color: letterData.color, opacity: 0.8 }}
                >
                  {letterData.lowercase}
                </div>
                <div className="text-xs font-bold text-gray-400 mt-0.5">
                  {letterData.words[0].emoji}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Progress section */}
      <motion.div
        className="mt-8 bg-white rounded-3xl shadow-card p-5 border border-orange-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-xl font-black text-gray-800 mb-3">My Letter Progress 📊</h2>
        <div className="flex gap-4 flex-wrap">
          {[
            { label: "Mastered", count: 5, emoji: "🌟", color: "#52C97A" },
            { label: "Learning", count: 5, emoji: "📚", color: "#6BC5F8" },
            { label: "Not started", count: 16, emoji: "💤", color: "#ccc" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: s.color }}
              />
              <span className="text-sm font-bold text-gray-600">
                {s.emoji} {s.count} {s.label}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1 mt-3">
          {ALPHABET_DATA.map((l, i) => (
            <div
              key={l.letter}
              className="w-6 h-6 rounded-md text-xs font-black flex items-center justify-center"
              style={{
                backgroundColor: i < 5 ? "#52C97A" : i < 10 ? "#6BC5F8" : "#f0f0f0",
                color: i < 10 ? "white" : "#ccc",
              }}
            >
              {l.letter}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
