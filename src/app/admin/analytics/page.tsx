"use client";

import { motion } from "framer-motion";
import { ProgressBar } from "@/components/shared/ProgressBar";

const POPULAR_CONTENT = [
  { name: "Letter A", type: "Letter", views: 456, emoji: "🔤" },
  { name: "Sound Hunt Game", type: "Game", views: 389, emoji: "🎮" },
  { name: "Sam and the Cat", type: "Story", views: 312, emoji: "📖" },
  { name: "Trace Letter A", type: "Worksheet", views: 267, emoji: "📝" },
  { name: "Blending: sat", type: "Blending", views: 234, emoji: "🔗" },
];

export default function AdminAnalyticsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-black text-gray-800">📈 Analytics</h1>
        <p className="text-gray-500 font-bold">Platform usage and engagement</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Daily Active Users", value: "43", trend: "+12%", emoji: "👥" },
          { label: "Avg Session Time", value: "18 min", trend: "+3 min", emoji: "⏱️" },
          { label: "Games Played Today", value: "128", trend: "+22%", emoji: "🎮" },
          { label: "Worksheets Downloaded", value: "23", trend: "+8%", emoji: "📥" },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm"
          >
            <div className="text-3xl mb-1">{m.emoji}</div>
            <div className="text-2xl font-black text-gray-800">{m.value}</div>
            <div className="text-xs text-gray-500 font-bold">{m.label}</div>
            <div className="text-xs text-green-500 font-bold mt-1">{m.trend} this week</div>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Popular Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <h2 className="font-black text-gray-800 mb-4">🔥 Popular Content</h2>
          <div className="space-y-3">
            {POPULAR_CONTENT.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xl w-8">{item.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-bold text-gray-700 truncate">{item.name}</span>
                    <span className="text-xs font-bold text-gray-400 flex-shrink-0">{item.views}</span>
                  </div>
                  <ProgressBar value={item.views} max={500} height="h-1.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Usage by Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <h2 className="font-black text-gray-800 mb-4">📊 Usage by Section</h2>
          <div className="space-y-3">
            {[
              { label: "Letters", pct: 34, color: "#FF6B2B", emoji: "🔤" },
              { label: "Games", pct: 28, color: "#6BC5F8", emoji: "🎮" },
              { label: "Stories", pct: 18, color: "#B57BEB", emoji: "📖" },
              { label: "Worksheets", pct: 12, color: "#6BCFB5", emoji: "📝" },
              { label: "Sounds", pct: 8, color: "#FFD93D", emoji: "🔊" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="text-xl w-8">{s.emoji}</span>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-bold text-gray-700">{s.label}</span>
                    <span className="text-sm font-bold" style={{ color: s.color }}>{s.pct}%</span>
                  </div>
                  <ProgressBar value={s.pct} max={100} color={s.color} height="h-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Export */}
      <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex items-center justify-between">
        <div>
          <h3 className="font-black text-gray-800">Export Reports</h3>
          <p className="text-sm text-gray-500">Download detailed analytics reports</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary py-2 px-4 text-sm">📊 Export CSV</button>
          <button className="btn-primary py-2 px-4 text-sm">📄 PDF Report</button>
        </div>
      </div>
    </div>
  );
}
