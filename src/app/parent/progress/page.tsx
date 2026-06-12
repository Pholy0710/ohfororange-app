"use client";

import { motion } from "framer-motion";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { ALPHABET_DATA } from "@/data/letters";
import { PHONICS_SOUNDS } from "@/data/sounds";
import { STORIES } from "@/data/stories";
import { ALL_WORKSHEETS } from "@/data/worksheets";

export default function ParentProgressPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-black text-gray-800">📊 Emma's Progress Report</h1>
        <p className="text-gray-500 font-bold">Detailed learning analytics for Emma (Age 5)</p>
      </div>

      {/* Overall Summary */}
      <div className="bg-gradient-to-r from-[#FF6B2B] to-[#FFD93D] rounded-3xl p-6 text-white mb-6 shadow-card">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-4xl font-black">42</div>
            <div className="text-sm opacity-90 font-bold">Total Stars</div>
          </div>
          <div>
            <div className="text-4xl font-black">3</div>
            <div className="text-sm opacity-90 font-bold">Day Streak</div>
          </div>
          <div>
            <div className="text-4xl font-black">10</div>
            <div className="text-sm opacity-90 font-bold">Letters Done</div>
          </div>
          <div>
            <div className="text-4xl font-black">18m</div>
            <div className="text-sm opacity-90 font-bold">Avg. Daily</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Letters Progress */}
        <motion.div className="bg-white rounded-3xl shadow-card p-5 border border-orange-100" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h2 className="font-black text-gray-800 mb-4">🔤 Alphabet Progress</h2>
          <ProgressBar value={10} max={26} label="Letters Learned" showPercent color="#FF6B2B" className="mb-4" />
          <div className="flex flex-wrap gap-1.5">
            {ALPHABET_DATA.map((l, i) => (
              <div
                key={l.letter}
                className="w-8 h-8 rounded-lg text-xs font-black flex items-center justify-center"
                style={{
                  backgroundColor: i < 5 ? "#52C97A" : i < 10 ? "#6BC5F8" : "#f0f0f0",
                  color: i < 10 ? "white" : "#ccc",
                }}
              >
                {l.letter}
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-3 text-xs font-bold">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-green-400 inline-block" />5 Mastered</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-blue-400 inline-block" />5 Learning</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-gray-200 inline-block" />16 Not started</span>
          </div>
        </motion.div>

        {/* Phonics Progress */}
        <motion.div className="bg-white rounded-3xl shadow-card p-5 border border-orange-100" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <h2 className="font-black text-gray-800 mb-4">🔊 Phonics Progress</h2>
          <ProgressBar value={4} max={6} label="Sounds Mastered" showPercent color="#6BC5F8" className="mb-4" />
          <div className="space-y-2">
            {PHONICS_SOUNDS.map((s, i) => (
              <div key={s.sound} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-lg" style={{ backgroundColor: s.color }}>
                  /{s.sound}/
                </div>
                <div className="flex-1">
                  <ProgressBar value={i < 4 ? 100 : 40} max={100} color={s.color} height="h-2" />
                </div>
                <span className="text-xs font-bold" style={{ color: s.color }}>
                  {i < 3 ? "✅ Mastered" : i < 4 ? "📚 Learning" : "💤 Not started"}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Stories */}
        <div className="bg-white rounded-3xl shadow-card p-5 border border-orange-100">
          <h2 className="font-black text-gray-800 mb-4">📖 Story Progress</h2>
          <ProgressBar value={2} max={STORIES.length} label="Stories Read" showPercent color="#B57BEB" className="mb-4" />
          <div className="space-y-3">
            {STORIES.map((story, i) => (
              <div key={story.id} className="flex items-center gap-3">
                <span className="text-2xl">{story.coverEmoji}</span>
                <div className="flex-1">
                  <p className="font-bold text-gray-700 text-sm">{story.title}</p>
                  <ProgressBar value={i < 2 ? 100 : 0} max={100} color="#B57BEB" height="h-1.5" />
                </div>
                <span className="text-xs font-bold">{i < 2 ? "✅ Done" : "💤"}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Game Scores */}
        <div className="bg-white rounded-3xl shadow-card p-5 border border-orange-100">
          <h2 className="font-black text-gray-800 mb-4">🎮 Game Performance</h2>
          <div className="space-y-3">
            {[
              { name: "Sound Hunt", best: "⭐⭐⭐", plays: 5, emoji: "🎯" },
              { name: "Build the Word", best: "⭐⭐", plays: 3, emoji: "🏗️" },
              { name: "Match the Rhyme", best: "⭐⭐⭐", plays: 4, emoji: "🎵" },
              { name: "Pop the Letter", best: "⭐⭐", plays: 2, emoji: "🎈" },
              { name: "Treasure Trail", best: "⭐", plays: 1, emoji: "🗺️" },
            ].map((game) => (
              <div key={game.name} className="flex items-center gap-3">
                <span className="text-xl">{game.emoji}</span>
                <div className="flex-1">
                  <p className="font-bold text-gray-700 text-sm">{game.name}</p>
                  <p className="text-xs text-gray-400">{game.plays} plays</p>
                </div>
                <span>{game.best}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weekly Activity Chart */}
      <div className="bg-white rounded-3xl shadow-card p-5 border border-orange-100 mb-6">
        <h2 className="font-black text-gray-800 mb-4">📅 This Week's Activity</h2>
        <div className="flex gap-3 items-end">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
            const mins = [25, 30, 0, 18, 22, 15, 0][i];
            return (
              <div key={day} className="flex-1 text-center">
                <div className="text-xs font-bold text-[#FF6B2B] mb-1">{mins > 0 ? `${mins}m` : ""}</div>
                <div
                  className="rounded-xl mx-auto transition-all"
                  style={{
                    height: `${Math.max(mins * 2, 8)}px`,
                    backgroundColor: mins > 0 ? "#FF6B2B" : "#f0f0f0",
                    width: "100%",
                    maxWidth: 40,
                  }}
                />
                <div className="text-xs text-gray-400 font-bold mt-1">{day}</div>
              </div>
            );
          })}
        </div>
        <p className="text-center text-sm font-bold text-gray-500 mt-3">
          Total this week: <span className="text-[#FF6B2B]">110 minutes</span>
        </p>
      </div>

      {/* Recommendations */}
      <div className="bg-gradient-to-r from-[#6BCFB5] to-[#6BC5F8] rounded-3xl p-5 text-white">
        <h2 className="font-black text-xl mb-3">💡 Teacher Recommendations</h2>
        <div className="space-y-2">
          {[
            "Emma has mastered letters A-E and is learning F-J. Focus on letters K-M next.",
            "The /s/ and /a/ sounds are strong. Spend more time on /n/ and /i/.",
            "Emma is ready to start blending — try the Blending section!",
            "Aim for 15-20 minutes of reading practice each day.",
          ].map((rec, i) => (
            <div key={i} className="flex gap-2 bg-white/20 rounded-xl p-3">
              <span className="text-sm">💡</span>
              <p className="text-sm font-bold opacity-90">{rec}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
