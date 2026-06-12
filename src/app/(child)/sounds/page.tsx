"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PHONICS_SOUNDS } from "@/data/sounds";

export default function SoundsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
          className="text-6xl mb-3"
        >
          🔊
        </motion.div>
        <h1 className="section-title">Phonics Sounds!</h1>
        <p className="text-gray-500 font-bold">Tap a sound to practice it</p>
      </div>

      <div className="bg-gradient-to-r from-[#FFF3EE] to-[#FFEEDD] rounded-3xl p-4 mb-6 border border-orange-200">
        <p className="text-center font-bold text-[#FF6B2B] text-lg">
          🐍 Learn: s · a · t · p · i · n
        </p>
        <p className="text-center text-sm text-gray-500 mt-1 font-bold">
          These 6 sounds unlock hundreds of words!
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {PHONICS_SOUNDS.map((sound, i) => (
          <motion.div
            key={sound.sound}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={`/sounds/${sound.sound}`}>
              <div
                className="rounded-3xl p-6 shadow-card hover:shadow-card-hover hover:scale-105
                           active:scale-95 transition-all duration-200 cursor-pointer text-center"
                style={{ backgroundColor: sound.bgColor }}
              >
                <div
                  className="text-6xl font-black leading-none mb-2"
                  style={{ color: sound.color }}
                >
                  {sound.letter}
                </div>
                <div className="text-3xl font-bold" style={{ color: sound.color, opacity: 0.7 }}>
                  {sound.sound}
                </div>
                <div className="mt-2 text-sm font-bold text-gray-500">{sound.description}</div>
                <div className="mt-3 flex justify-center gap-1">
                  {sound.words.slice(0, 3).map((w) => (
                    <span key={w.word} className="text-lg">{w.emoji}</span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-6 bg-white rounded-3xl shadow-soft p-5 border border-orange-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-lg font-black text-gray-800 mb-3">Why these sounds? 🤔</h2>
        <p className="text-gray-600 font-bold text-sm leading-relaxed">
          The sounds <strong className="text-[#FF6B2B]">s, a, t, p, i, n</strong> are the first
          6 sounds taught because they can be combined to make lots of easy words like{" "}
          <strong>sat</strong>, <strong>tap</strong>, <strong>pin</strong>, <strong>sit</strong>,
          and many more! 🌟
        </p>
      </motion.div>
    </div>
  );
}
