"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ALPHABET_DATA } from "@/data/letters";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.035 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.75 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 400 } },
};

export default function LettersPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-4">

      {/* ══════════ HERO HEADER ══════════ */}
      <motion.div
        className="relative overflow-hidden rounded-[2rem] mb-5 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #FF6B2B 0%, #FFD93D 100%)",
          boxShadow: "0 8px 36px rgba(255, 107, 43, 0.4)",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="absolute top-0 right-0 w-44 h-44 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none rounded-[2rem]"
             style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent 55%)" }} />

        <div className="relative p-6">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-6xl mb-2 select-none"
          >
            🔤
          </motion.div>
          <h1 className="display-font text-4xl drop-shadow-md">The Alphabet!</h1>
          <p className="text-white/90 font-bold mt-1">Tap a letter to learn all about it</p>
          <div className="flex justify-center gap-2 mt-3">
            {["A", "B", "C", "…"].map((l) => (
              <span
                key={l}
                className="w-9 h-9 bg-white/30 rounded-xl flex items-center justify-center font-black text-white text-base"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ══════════ ALPHABET GRID ══════════ */}
      <motion.div
        className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-2.5"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {ALPHABET_DATA.map((letterData) => (
          <motion.div key={letterData.letter} variants={item}>
            <Link href={`/letters/${letterData.letter.toLowerCase()}`}>
              <div
                className="aspect-square rounded-2xl flex flex-col items-center justify-center
                           hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-2
                           border-2 border-white/60"
                style={{
                  backgroundColor: letterData.bgColor,
                  boxShadow: "0 4px 14px rgba(0,0,0,0.10)",
                }}
              >
                <div
                  className="text-3xl sm:text-4xl font-black leading-none"
                  style={{ color: letterData.color }}
                >
                  {letterData.uppercase}
                </div>
                <div
                  className="text-xl sm:text-2xl font-bold"
                  style={{ color: letterData.color, opacity: 0.75 }}
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

      {/* ══════════ PROGRESS SECTION ══════════ */}
      <motion.div
        className="mt-5 bg-white rounded-3xl p-5 border border-orange-100"
        style={{ boxShadow: "0 4px 20px rgba(255, 107, 43, 0.12)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-xl font-black text-gray-800 mb-3">My Letter Progress 📊</h2>
        <div className="flex gap-4 flex-wrap mb-3">
          {[
            { label: "Mastered",    count: 5,  emoji: "🌟", color: "#10B981" },
            { label: "Learning",    count: 5,  emoji: "📚", color: "#0EA5E9" },
            { label: "Not started", count: 16, emoji: "💤", color: "#D1D5DB" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full shadow-sm" style={{ backgroundColor: s.color }} />
              <span className="text-sm font-bold text-gray-600">
                {s.emoji} {s.count} {s.label}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {ALPHABET_DATA.map((l, i) => (
            <div
              key={l.letter}
              className="w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center shadow-sm"
              style={{
                background:
                  i < 5  ? "linear-gradient(135deg, #10B981, #34D399)" :
                  i < 10 ? "linear-gradient(135deg, #0EA5E9, #38BDF8)" :
                  "#F3F4F6",
                color: i < 10 ? "white" : "#D1D5DB",
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
