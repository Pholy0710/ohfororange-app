"use client";

import { motion } from "framer-motion";
import { StarRating } from "@/components/shared/StarRating";
import { OrangeMascot } from "@/components/shared/OrangeMascot";

const ACHIEVEMENTS = [
  { id: "1", name: "Alphabet Explorer", emoji: "🔤", desc: "Learned 10 letters", earned: true, earnedDate: "Jan 15", color: "#FF6B2B", stars: 3 },
  { id: "2", name: "Sound Master", emoji: "🔊", desc: "Mastered s, a, t, p, i, n", earned: true, earnedDate: "Jan 18", color: "#6BC5F8", stars: 3 },
  { id: "3", name: "Story Reader", emoji: "📖", desc: "Read 2 stories", earned: true, earnedDate: "Jan 20", color: "#B57BEB", stars: 2 },
  { id: "4", name: "Blending Hero", emoji: "🔗", desc: "Blend 5 words", earned: false, earnedDate: "", color: "#6BCFB5", stars: 0 },
  { id: "5", name: "Worksheet Champ", emoji: "📝", desc: "Complete 10 sheets", earned: false, earnedDate: "", color: "#FFD93D", stars: 0 },
  { id: "6", name: "Streak Hero", emoji: "🔥", desc: "7-day reading streak", earned: false, earnedDate: "", color: "#FF8FAB", stars: 0 },
  { id: "7", name: "Game Master", emoji: "🎮", desc: "Play all 5 games", earned: false, earnedDate: "", color: "#52C97A", stars: 0 },
  { id: "8", name: "Reading Star", emoji: "⭐", desc: "Earn 100 stars", earned: false, earnedDate: "", color: "#FFD93D", stars: 0 },
];

const STICKERS = [
  { emoji: "🌟", name: "Gold Star", count: 5 },
  { emoji: "🦋", name: "Butterfly", count: 3 },
  { emoji: "🌈", name: "Rainbow", count: 2 },
  { emoji: "🎉", name: "Party", count: 4 },
  { emoji: "🏆", name: "Trophy", count: 1 },
  { emoji: "💎", name: "Diamond", count: 0 },
  { emoji: "🦄", name: "Unicorn", count: 0 },
  { emoji: "🚀", name: "Rocket", count: 2 },
];

export default function RewardsPage() {
  const earned = ACHIEVEMENTS.filter((a) => a.earned).length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="text-center mb-6">
        <motion.div initial={{ scale: 0, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring" }} className="text-6xl mb-3">
          🏆
        </motion.div>
        <h1 className="section-title">My Rewards!</h1>
        <p className="text-gray-500 font-bold">Collect badges, stickers, and trophies!</p>
      </div>

      {/* Total Score Banner */}
      <motion.div
        className="bg-gradient-to-r from-[#FFD93D] to-[#FF6B2B] rounded-3xl p-6 text-white text-center mb-6 shadow-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="flex items-center justify-center gap-8">
          <div>
            <div className="text-5xl font-black">⭐ 42</div>
            <div className="text-sm opacity-90 font-bold">Total Stars</div>
          </div>
          <div>
            <div className="text-5xl font-black">🏆 {earned}</div>
            <div className="text-sm opacity-90 font-bold">Badges Earned</div>
          </div>
          <div>
            <div className="text-5xl font-black">🔥 3</div>
            <div className="text-sm opacity-90 font-bold">Day Streak</div>
          </div>
        </div>
        <OrangeMascot size="sm" expression="cheering" className="mt-3" />
      </motion.div>

      {/* Achievement Badges */}
      <h2 className="text-xl font-black text-gray-800 mb-4">🎖️ Achievement Badges</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {ACHIEVEMENTS.map((ach, i) => (
          <motion.div
            key={ach.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.07, type: "spring" }}
            className={`rounded-3xl p-4 text-center transition-all
                       ${ach.earned
                         ? "shadow-card hover:shadow-card-hover hover:scale-105"
                         : "opacity-40 bg-gray-100 border-2 border-dashed border-gray-200"}`}
            style={ach.earned ? { backgroundColor: ach.color + "15", border: `2px solid ${ach.color}30` } : {}}
          >
            <motion.div
              className="text-4xl mb-2"
              animate={ach.earned ? { y: [0, -5, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            >
              {ach.emoji}
            </motion.div>
            <div className="font-black text-sm text-gray-800 leading-tight">{ach.name}</div>
            <div className="text-xs text-gray-500 font-bold mt-0.5">{ach.desc}</div>
            {ach.earned ? (
              <>
                <StarRating stars={ach.stars} size="sm" className="justify-center mt-2" />
                <div className="text-xs mt-1 font-bold" style={{ color: ach.color }}>
                  ✅ {ach.earnedDate}
                </div>
              </>
            ) : (
              <div className="text-xs text-gray-400 mt-2 font-bold">🔒 Locked</div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Sticker Collection */}
      <h2 className="text-xl font-black text-gray-800 mb-4">🌟 Sticker Collection</h2>
      <div className="bg-white rounded-3xl shadow-card p-5 border border-orange-100 mb-6">
        <div className="grid grid-cols-4 gap-4">
          {STICKERS.map((sticker, i) => (
            <motion.div
              key={sticker.name}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.06, type: "spring" }}
              className={`text-center p-3 rounded-2xl ${sticker.count > 0 ? "bg-yellow-50" : "bg-gray-50 opacity-40"}`}
            >
              <div className="text-4xl">{sticker.emoji}</div>
              <div className="text-xs font-bold text-gray-500 mt-1">{sticker.name}</div>
              {sticker.count > 0 && (
                <div className="text-xs font-black text-yellow-600 mt-0.5">x{sticker.count}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <h2 className="text-xl font-black text-gray-800 mb-4">📜 Certificates</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { title: "Reading Star Certificate", date: "Jan 2024", earned: true },
          { title: "Phonics Champion", date: "Jan 2024", earned: true },
          { title: "Blending Master", date: "Coming soon", earned: false },
          { title: "Story Reader Award", date: "Coming soon", earned: false },
        ].map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`bg-white rounded-2xl shadow-soft p-4 border flex items-center gap-3
                       ${cert.earned ? "border-orange-200" : "border-gray-200 opacity-50"}`}
          >
            <span className="text-4xl">{cert.earned ? "📜" : "🔒"}</span>
            <div className="flex-1">
              <div className="font-black text-gray-800 text-sm">{cert.title}</div>
              <div className="text-xs text-gray-400 font-bold">{cert.date}</div>
            </div>
            {cert.earned && (
              <button className="text-xs bg-[#FF6B2B] text-white px-3 py-1.5 rounded-xl font-bold hover:bg-orange-600 transition-colors">
                🖨️ Print
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
