"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ALL_WORKSHEETS } from "@/data/worksheets";
import { STORIES } from "@/data/stories";
import { ALPHABET_DATA } from "@/data/letters";

export default function AdminDashboardPage() {
  const stats = [
    { label: "Total Users", value: "127", emoji: "👥", change: "+12 this week", color: "#FF6B2B" },
    { label: "Active Children", value: "89", emoji: "👧", change: "+5 today", color: "#6BC5F8" },
    { label: "Worksheets", value: ALL_WORKSHEETS.length.toString(), emoji: "📝", change: "All published", color: "#6BCFB5" },
    { label: "Stories", value: STORIES.length.toString(), emoji: "📖", change: "All published", color: "#B57BEB" },
    { label: "Game Sessions", value: "1,234", emoji: "🎮", change: "+45 today", color: "#FFD93D" },
    { label: "Worksheets DL'd", value: "456", emoji: "💾", change: "+23 today", color: "#52C97A" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-500 font-bold">OhforOrange Read & Play — Content Management</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100"
          >
            <div className="text-3xl mb-2">{stat.emoji}</div>
            <div className="text-3xl font-black" style={{ color: stat.color }}>{stat.value}</div>
            <div className="font-bold text-gray-600 text-sm">{stat.label}</div>
            <div className="text-xs text-green-500 font-bold mt-1">{stat.change}</div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          { href: "/admin/stories", label: "Manage Stories", emoji: "📖", desc: `${STORIES.length} stories published`, color: "#B57BEB" },
          { href: "/admin/worksheets", label: "Manage Worksheets", emoji: "📝", desc: `${ALL_WORKSHEETS.length} worksheets`, color: "#6BCFB5" },
          { href: "/admin/users", label: "Manage Users", emoji: "👥", desc: "127 registered users", color: "#FF6B2B" },
        ].map((action, i) => (
          <motion.div
            key={action.href}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={action.href}>
              <div
                className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100 hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer"
                style={{ borderLeft: `4px solid ${action.color}` }}
              >
                <div className="text-4xl mb-2">{action.emoji}</div>
                <div className="font-black text-gray-800">{action.label}</div>
                <div className="text-sm text-gray-500 font-bold">{action.desc}</div>
                <div className="mt-2 text-sm font-bold" style={{ color: action.color }}>Manage →</div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Content Overview */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Stories List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 bg-purple-50 border-b border-purple-100 flex justify-between items-center">
            <h2 className="font-black text-purple-800">📖 Stories</h2>
            <Link href="/admin/stories" className="text-xs text-purple-600 font-bold hover:underline">Manage all →</Link>
          </div>
          <div className="divide-y divide-gray-50">
            {STORIES.map((story) => (
              <div key={story.id} className="p-4 flex items-center gap-3">
                <span className="text-2xl">{story.coverEmoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-800 text-sm">{story.title}</p>
                  <p className="text-xs text-gray-400">{story.totalPages} pages · Difficulty {"⭐".repeat(story.difficulty)}</p>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">Published</span>
              </div>
            ))}
          </div>
        </div>

        {/* Letters Coverage */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 bg-orange-50 border-b border-orange-100">
            <h2 className="font-black text-orange-800">🔤 Alphabet Coverage</h2>
          </div>
          <div className="p-4">
            <div className="flex flex-wrap gap-1.5">
              {ALPHABET_DATA.map((l) => (
                <div
                  key={l.letter}
                  className="w-8 h-8 rounded-lg text-xs font-black flex items-center justify-center bg-green-100 text-green-700"
                  title={`${l.letter}: ${l.words.length} words`}
                >
                  {l.letter}
                </div>
              ))}
            </div>
            <div className="mt-3 flex gap-3 text-xs font-bold">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded bg-green-100" />
                <span className="text-gray-500">All 26 letters covered ✅</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
