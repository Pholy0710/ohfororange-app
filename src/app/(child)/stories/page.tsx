"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { STORIES } from "@/data/stories";

export default function StoriesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-4">

      {/* ══════════ HERO HEADER ══════════ */}
      <motion.div
        className="relative overflow-hidden rounded-[2rem] mb-5 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
          boxShadow: "0 8px 36px rgba(139, 92, 246, 0.4)",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="absolute top-0 right-0 w-44 h-44 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none rounded-[2rem]"
             style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.18), transparent 55%)" }} />

        <div className="relative p-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-6xl mb-2 select-none"
          >
            📖
          </motion.div>
          <h1 className="display-font text-4xl drop-shadow-md">Story Library!</h1>
          <p className="text-white/90 font-bold mt-1">Read fun stories with our friends</p>
          <div className="flex justify-center gap-3 mt-3 text-2xl select-none">
            {STORIES.map((s) => <span key={s.id}>{s.coverEmoji}</span>)}
          </div>
        </div>
      </motion.div>

      {/* ══════════ STORY CARDS ══════════ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {STORIES.map((story, i) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={`/stories/${story.id}`}>
              <div
                className="bg-white rounded-3xl overflow-hidden cursor-pointer
                           hover:scale-[1.02] active:scale-[0.99] transition-all duration-200
                           border border-purple-100"
                style={{ boxShadow: "0 6px 24px rgba(139, 92, 246, 0.15)" }}
              >
                {/* Cover */}
                <div
                  className="h-40 relative overflow-hidden flex items-center justify-center text-7xl"
                  style={{
                    background: `linear-gradient(135deg, ${story.coverColor}25, ${story.coverColor}55)`,
                  }}
                >
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.15), transparent 60%)" }}
                  />
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                    className="relative z-10 select-none"
                  >
                    {story.coverEmoji}
                  </motion.div>
                  <div className="absolute top-3 right-3 bg-white/85 backdrop-blur rounded-full px-2.5 py-1 text-xs font-black text-gray-700">
                    {story.totalPages} pages
                  </div>
                  <div className="absolute bottom-3 left-3 text-base select-none">
                    {"⭐".repeat(story.difficulty)}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-lg font-black text-gray-800">{story.title}</h3>
                  <p className="text-sm text-gray-500 font-bold mt-0.5">{story.description}</p>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {story.wordList.slice(0, 5).map((word) => (
                      <span
                        key={word}
                        className="text-xs bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full font-bold border border-purple-100"
                      >
                        {word}
                      </span>
                    ))}
                    {story.wordList.length > 5 && (
                      <span className="text-xs text-gray-400 font-bold">+{story.wordList.length - 5} more</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex gap-1.5">
                      {["📖 Read", "🔊 Listen"].map((btn) => (
                        <span
                          key={btn}
                          className="text-xs bg-orange-50 text-[#FF6B2B] px-2.5 py-1 rounded-xl font-black border border-orange-100"
                        >
                          {btn}
                        </span>
                      ))}
                    </div>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-sm"
                      style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899)" }}
                    >
                      →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ══════════ READING GOAL ══════════ */}
      <motion.div
        className="mt-5 relative overflow-hidden rounded-3xl p-5 text-white"
        style={{
          background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
          boxShadow: "0 6px 28px rgba(139, 92, 246, 0.35)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none rounded-3xl"
             style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.15), transparent 50%)" }} />
        <div className="relative">
          <h2 className="font-black text-xl">📚 Reading Goal</h2>
          <p className="text-sm opacity-90 mt-1">Read all 4 stories to earn your Story Reader badge!</p>
          <div className="flex gap-2 mt-3">
            {STORIES.map((s, i) => (
              <div
                key={s.id}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl select-none
                           ${i < 2 ? "bg-white/30" : "bg-white/10 opacity-50"}`}
              >
                {s.coverEmoji}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </div>
  );
}
