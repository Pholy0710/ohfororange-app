"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { STORIES } from "@/data/stories";

export default function AdminStoriesPage() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-black text-gray-800">📖 Manage Stories</h1>
          <p className="text-gray-500 font-bold">{STORIES.length} stories in library</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="btn-primary py-2.5 px-5"
        >
          + Add Story
        </button>
      </div>

      <div className="space-y-4">
        {STORIES.map((story, i) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5"
          >
            <div className="flex items-start gap-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0"
                style={{ backgroundColor: story.coverColor + "20" }}
              >
                {story.coverEmoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-black text-gray-800 text-lg">{story.title}</h3>
                    <p className="text-sm text-gray-500 font-bold">{story.description}</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold flex-shrink-0">
                    ✅ Published
                  </span>
                </div>

                <div className="flex items-center gap-4 mt-2 text-xs font-bold text-gray-500">
                  <span>📄 {story.totalPages} pages</span>
                  <span>⭐ Difficulty: {"⭐".repeat(story.difficulty)}</span>
                  <span>📝 {story.wordList.length} target words</span>
                </div>

                <div className="flex flex-wrap gap-1 mt-2">
                  {story.wordList.map((word) => (
                    <span key={word} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full border border-blue-100">
                      {word}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 flex-shrink-0">
                <button className="px-3 py-1.5 text-xs font-bold text-[#FF6B2B] bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                  Edit
                </button>
                <button className="px-3 py-1.5 text-xs font-bold text-red-500 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                  Archive
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Story Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-md"
          >
            <h2 className="text-xl font-black text-gray-800 mb-4">Add New Story</h2>
            <div className="space-y-3">
              <input placeholder="Story Title" className="w-full px-4 py-3 rounded-xl border border-gray-200 font-bold focus:outline-none focus:border-[#FF6B2B]" />
              <input placeholder="Slug (e.g. my-story)" className="w-full px-4 py-3 rounded-xl border border-gray-200 font-bold focus:outline-none focus:border-[#FF6B2B]" />
              <textarea placeholder="Description" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 font-bold focus:outline-none focus:border-[#FF6B2B] resize-none" />
              <div className="grid grid-cols-2 gap-3">
                <input placeholder="Cover Emoji" className="px-4 py-3 rounded-xl border border-gray-200 font-bold focus:outline-none focus:border-[#FF6B2B]" />
                <input placeholder="Cover Color (#hex)" className="px-4 py-3 rounded-xl border border-gray-200 font-bold focus:outline-none focus:border-[#FF6B2B]" />
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button className="btn-secondary flex-1" onClick={() => setShowAddForm(false)}>Cancel</button>
              <button className="btn-primary flex-1">Save Story</button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
