"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { StarRating } from "@/components/shared/StarRating";
import { ALPHABET_DATA } from "@/data/letters";
import { PHONICS_SOUNDS } from "@/data/sounds";
import { STORIES } from "@/data/stories";

const ACHIEVEMENTS = [
  { id: "alphabet-explorer", name: "Alphabet Explorer", emoji: "🔤", desc: "Learned 10 letters", earned: true, color: "#FF6B2B" },
  { id: "sound-master", name: "Sound Master", emoji: "🔊", desc: "Mastered s, a, t", earned: true, color: "#6BC5F8" },
  { id: "blending-hero", name: "Blending Hero", emoji: "🔗", desc: "Blended 5 words", earned: false, color: "#6BCFB5" },
  { id: "story-reader", name: "Story Reader", emoji: "📖", desc: "Read 2 stories", earned: true, color: "#B57BEB" },
  { id: "worksheet-champion", name: "Worksheet Champion", emoji: "📝", desc: "Completed 10 worksheets", earned: false, color: "#FFD93D" },
  { id: "streak-hero", name: "Streak Hero", emoji: "🔥", desc: "7-day reading streak", earned: false, color: "#FF8FAB" },
];

export default function ProgressPage() {
  const letterProgress = { mastered: 5, learning: 5, total: 26 };
  const soundProgress = { mastered: 3, learning: 2, total: 6 };
  const storyProgress = { completed: 2, total: STORIES.length };
  const worksheetProgress = { completed: 10, total: 120 };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="text-center mb-6">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="text-6xl mb-3">
          ⭐
        </motion.div>
        <h1 className="section-title">My Progress!</h1>
        <p className="text-gray-500 font-bold">Look how far you've come!</p>
      </div>

      {/* Total Stars */}
      <motion.div
        className="bg-gradient-to-r from-[#FF6B2B] to-[#FFD93D] rounded-3xl p-6 text-white text-center mb-6 shadow-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="text-7xl font-black">⭐ 42</div>
        <div className="text-xl font-black mt-1 opacity-90">Total Stars Earned!</div>
        <div className="flex justify-center gap-2 mt-3">
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">🔥 3-day streak</span>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">📅 Started 7 days ago</span>
        </div>
      </motion.div>

      {/* Progress Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {[
          { label: "Letters", emoji: "🔤", color: "#FF6B2B", href: "/letters",
            current: letterProgress.mastered + letterProgress.learning, total: letterProgress.total,
            detail: `${letterProgress.mastered} mastered, ${letterProgress.learning} learning` },
          { label: "Sounds", emoji: "🔊", color: "#6BC5F8", href: "/sounds",
            current: soundProgress.mastered + soundProgress.learning, total: soundProgress.total,
            detail: `${soundProgress.mastered} mastered, ${soundProgress.learning} learning` },
          { label: "Stories", emoji: "📖", color: "#B57BEB", href: "/stories",
            current: storyProgress.completed, total: storyProgress.total,
            detail: `${storyProgress.completed} of ${storyProgress.total} read` },
          { label: "Worksheets", emoji: "📝", color: "#6BCFB5", href: "/worksheets",
            current: worksheetProgress.completed, total: worksheetProgress.total,
            detail: `${worksheetProgress.completed} completed` },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={stat.href}>
              <div className="bg-white rounded-2xl shadow-card p-4 border border-orange-100 hover:shadow-card-hover hover:scale-[1.02] transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{stat.emoji}</span>
                  <span className="font-black text-gray-700">{stat.label}</span>
                </div>
                <div className="text-2xl font-black mb-1" style={{ color: stat.color }}>
                  {stat.current}/{stat.total}
                </div>
                <ProgressBar value={stat.current} max={stat.total} color={stat.color} height="h-2" />
                <p className="text-xs text-gray-400 font-bold mt-1">{stat.detail}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Letter Progress Grid */}
      <motion.div
        className="bg-white rounded-3xl shadow-card p-5 border border-orange-100 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-lg font-black text-gray-800 mb-3">Letter Progress 🔤</h2>
        <div className="flex flex-wrap gap-1.5">
          {ALPHABET_DATA.map((l, i) => (
            <Link key={l.letter} href={`/letters/${l.letter.toLowerCase()}`}>
              <div
                className="w-8 h-8 rounded-lg text-sm font-black flex items-center justify-center transition-all hover:scale-110"
                style={{
                  backgroundColor: i < 5 ? "#52C97A" : i < 10 ? "#6BC5F8" : "#f0f0f0",
                  color: i < 10 ? "white" : "#ccc",
                }}
                title={i < 5 ? "Mastered!" : i < 10 ? "Learning" : "Not started"}
              >
                {l.letter}
              </div>
            </Link>
          ))}
        </div>
        <div className="flex gap-4 mt-3">
          {[
            { label: "Mastered", color: "#52C97A" },
            { label: "Learning", color: "#6BC5F8" },
            { label: "Not started", color: "#f0f0f0" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: s.color }} />
              <span className="text-xs font-bold text-gray-500">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        className="bg-white rounded-3xl shadow-card p-5 border border-orange-100 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-lg font-black text-gray-800 mb-4">🏆 Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {ACHIEVEMENTS.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              className={`p-4 rounded-2xl text-center transition-all
                         ${ach.earned
                           ? "shadow-card"
                           : "bg-gray-50 opacity-50 border border-gray-100"}`}
              style={ach.earned ? { backgroundColor: ach.color + "20", border: `2px solid ${ach.color}30` } : {}}
            >
              <div className="text-3xl mb-1">{ach.emoji}</div>
              <div className="font-black text-sm text-gray-800">{ach.name}</div>
              <div className="text-xs text-gray-500 font-bold mt-0.5">{ach.desc}</div>
              {ach.earned && (
                <div className="mt-2">
                  <StarRating stars={3} size="sm" />
                </div>
              )}
              {!ach.earned && <div className="text-xs text-gray-300 font-bold mt-1">🔒 Locked</div>}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Reading Streak */}
      <motion.div
        className="bg-white rounded-3xl shadow-card p-5 border border-orange-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-lg font-black text-gray-800 mb-3">🔥 Reading Streak</h2>
        <div className="flex gap-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
            <div key={day} className="flex-1 text-center">
              <div
                className={`w-full aspect-square rounded-xl flex items-center justify-center mb-1
                           ${i < 3 ? "bg-[#FF6B2B] text-white" : "bg-gray-100 text-gray-300"}`}
              >
                {i < 3 ? "🔥" : "○"}
              </div>
              <span className="text-xs font-bold text-gray-400">{day[0]}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-sm font-bold text-[#FF6B2B] mt-3">
          🔥 3 days in a row! Keep going!
        </p>
      </motion.div>
    </div>
  );
}
