"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { STORIES } from "@/data/stories";
import { ALL_WORKSHEETS } from "@/data/worksheets";

const CHILD_PROFILE = {
  name: "Emma",
  age: 5,
  avatar: "👧",
  joinDate: "2024-01-10",
  totalStars: 42,
  streak: 3,
};

const RECENT_ACTIVITY = [
  { date: "Today", activity: "Completed letter A activity", stars: 3, emoji: "🔤" },
  { date: "Today", activity: "Read 'Sam and the Cat' - Page 5", stars: 2, emoji: "📖" },
  { date: "Yesterday", activity: "Played Sound Hunt - Level 2", stars: 3, emoji: "🎮" },
  { date: "Yesterday", activity: "Downloaded Worksheet: Trace Letter B", stars: 0, emoji: "📝" },
  { date: "2 days ago", activity: "Mastered /s/ sound", stars: 3, emoji: "🔊" },
];

const SUGGESTIONS = [
  { title: "Continue: Blending s+a+t", href: "/blending", emoji: "🔗", reason: "Emma was learning this yesterday" },
  { title: "Try: Letter C lesson", href: "/letters/c", emoji: "🔤", reason: "Next in alphabet sequence" },
  { title: "Download: Trace Letter C worksheet", href: "/worksheets/trace-letter-c", emoji: "📝", reason: "Reinforces letter C learning" },
];

export default function ParentDashboardPage() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black text-gray-800">Parent Dashboard 👨‍👩‍👧</h1>
          <p className="text-gray-500 font-bold">Welcome back! Here's how Emma is doing.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-soft p-3 border border-orange-100 text-center">
          <div className="text-4xl">{CHILD_PROFILE.avatar}</div>
          <div className="font-black text-gray-700 text-sm">{CHILD_PROFILE.name}</div>
          <div className="text-xs text-gray-400">Age {CHILD_PROFILE.age}</div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Stars", value: CHILD_PROFILE.totalStars, emoji: "⭐", color: "#FFD93D", bg: "#FFFBEE" },
          { label: "Day Streak", value: `${CHILD_PROFILE.streak} days`, emoji: "🔥", color: "#FF6B2B", bg: "#FFF3EE" },
          { label: "Stories Read", value: `${2}/${STORIES.length}`, emoji: "📖", color: "#B57BEB", bg: "#F5EEFF" },
          { label: "Worksheets Done", value: "10", emoji: "📝", color: "#6BCFB5", bg: "#EEFBF7" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl shadow-soft p-4 border border-orange-100"
            style={{ backgroundColor: stat.bg }}
          >
            <div className="text-3xl mb-1">{stat.emoji}</div>
            <div className="text-2xl font-black" style={{ color: stat.color }}>{stat.value}</div>
            <div className="text-xs text-gray-500 font-bold">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Learning Progress */}
        <motion.div
          className="bg-white rounded-3xl shadow-card p-6 border border-orange-100"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-lg font-black text-gray-800 mb-4">📊 Learning Progress</h2>
          <div className="space-y-4">
            {[
              { label: "Letters (A-Z)", current: 10, total: 26, color: "#FF6B2B" },
              { label: "Phonics Sounds", current: 4, total: 6, color: "#6BC5F8" },
              { label: "CVC Words", current: 6, total: 10, color: "#6BCFB5" },
              { label: "Stories Read", current: 2, total: STORIES.length, color: "#B57BEB" },
              { label: "Worksheets", current: 10, total: ALL_WORKSHEETS.length, color: "#FFD93D" },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm font-bold text-gray-600 mb-1">
                  <span>{item.label}</span>
                  <span style={{ color: item.color }}>{item.current}/{item.total}</span>
                </div>
                <ProgressBar value={item.current} max={item.total} color={item.color} height="h-3" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          className="bg-white rounded-3xl shadow-card p-6 border border-orange-100"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-lg font-black text-gray-800 mb-4">📅 Recent Activity</h2>
          <div className="space-y-3">
            {RECENT_ACTIVITY.map((item, i) => (
              <div key={i} className="flex items-start gap-3 pb-3 border-b border-gray-50 last:border-0">
                <div className="text-2xl">{item.emoji}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-700 line-clamp-1">{item.activity}</p>
                  <p className="text-xs text-gray-400 font-bold">{item.date}</p>
                </div>
                {item.stars > 0 && (
                  <div className="text-sm">{"⭐".repeat(item.stars)}</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* AI Suggestions */}
      <motion.div
        className="bg-gradient-to-r from-[#6BCFB5] to-[#6BC5F8] rounded-3xl p-6 text-white mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="font-black text-xl mb-4">🤖 Suggested Next Steps for Emma</h2>
        <div className="grid md:grid-cols-3 gap-3">
          {SUGGESTIONS.map((sug, i) => (
            <Link key={i} href={sug.href}>
              <div className="bg-white/20 hover:bg-white/30 rounded-2xl p-4 transition-all cursor-pointer">
                <div className="text-3xl mb-2">{sug.emoji}</div>
                <div className="font-black text-sm">{sug.title}</div>
                <div className="text-xs opacity-80 mt-1">{sug.reason}</div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        className="bg-white rounded-3xl shadow-card p-6 border border-orange-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-lg font-black text-gray-800 mb-4">⚡ Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Print Weekly Pack", emoji: "🖨️", href: "/parent/worksheets", color: "#FF6B2B" },
            { label: "View Progress", emoji: "📊", href: "/parent/progress", color: "#6BC5F8" },
            { label: "Download Certificate", emoji: "🏆", href: "/parent/worksheets?type=certificate", color: "#FFD93D" },
            { label: "Admin Panel", emoji: "⚙️", href: "/admin/dashboard", color: "#B57BEB" },
          ].map((action) => (
            <Link key={action.label} href={action.href}>
              <div
                className="p-4 rounded-2xl text-center hover:scale-105 active:scale-95 transition-all cursor-pointer"
                style={{ backgroundColor: action.color + "15" }}
              >
                <div className="text-3xl mb-1">{action.emoji}</div>
                <div className="text-xs font-black text-gray-700">{action.label}</div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
