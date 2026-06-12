"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { STORIES } from "@/data/stories";

export default function StoriesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="text-center mb-8">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="text-6xl mb-3">
          📖
        </motion.div>
        <h1 className="section-title">Story Library!</h1>
        <p className="text-gray-500 font-bold">Read fun stories with our friends</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {STORIES.map((story, i) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={`/stories/${story.id}`}>
              <div className="bg-white rounded-3xl shadow-card hover:shadow-card-hover hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 overflow-hidden cursor-pointer border border-orange-100">
                {/* Story Cover */}
                <div
                  className="h-36 flex items-center justify-center text-7xl"
                  style={{ backgroundColor: story.coverColor + "20" }}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {story.coverEmoji}
                  </motion.div>
                </div>

                {/* Story Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-black text-gray-800">{story.title}</h3>
                      <p className="text-sm text-gray-500 font-bold mt-0.5">{story.description}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs bg-orange-100 text-[#FF6B2B] px-2 py-0.5 rounded-full font-bold">
                        {story.totalPages} pages
                      </span>
                      <span className="text-xs text-gray-400 font-bold">
                        {"⭐".repeat(story.difficulty)}
                      </span>
                    </div>
                  </div>

                  {/* Word list */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {story.wordList.slice(0, 5).map((word) => (
                      <span key={word} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold border border-blue-100">
                        {word}
                      </span>
                    ))}
                    {story.wordList.length > 5 && (
                      <span className="text-xs text-gray-400 font-bold">+{story.wordList.length - 5} more</span>
                    )}
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex gap-1">
                      {["📖 Read", "🔊 Listen"].map((btn) => (
                        <span key={btn} className="text-xs bg-orange-50 text-[#FF6B2B] px-2 py-1 rounded-lg font-bold">
                          {btn}
                        </span>
                      ))}
                    </div>
                    <span className="text-[#FF6B2B] font-black">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Achievement */}
      <motion.div
        className="mt-6 bg-gradient-to-r from-[#B57BEB] to-[#FF8FAB] rounded-3xl p-5 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="font-black text-lg">📚 Reading Goal</h2>
        <p className="text-sm opacity-90 mt-1">Read all 4 stories to earn your Story Reader badge!</p>
        <div className="flex gap-2 mt-3">
          {STORIES.map((s, i) => (
            <div
              key={s.id}
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl
                         ${i < 2 ? "bg-white/30" : "bg-white/10 opacity-50"}`}
            >
              {s.coverEmoji}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
