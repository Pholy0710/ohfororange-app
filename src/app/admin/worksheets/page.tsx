"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ALL_WORKSHEETS, WORKSHEET_CATEGORIES } from "@/data/worksheets";

export default function AdminWorksheetsPage() {
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const filtered = ALL_WORKSHEETS.filter((w) => {
    const matchCat = filter === "ALL" || w.category === filter;
    const matchSearch = !search || w.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-black text-gray-800">📝 Manage Worksheets</h1>
          <p className="text-gray-500 font-bold">{ALL_WORKSHEETS.length} worksheets in library</p>
        </div>
        <button className="btn-primary py-2.5 px-5">+ Add Worksheet</button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-5 gap-3 mb-6">
        {WORKSHEET_CATEGORIES.map((cat) => (
          <div key={cat.id} className="bg-white rounded-xl p-3 text-center border border-gray-100 shadow-sm">
            <div className="text-2xl">{cat.emoji}</div>
            <div className="font-black text-xl" style={{ color: cat.color }}>{cat.count}</div>
            <div className="text-xs text-gray-500 font-bold">{cat.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-xl border border-gray-200 font-bold text-sm focus:outline-none focus:border-[#FF6B2B]"
        />
        <button
          onClick={() => setFilter("ALL")}
          className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${filter === "ALL" ? "bg-[#FF6B2B] text-white" : "bg-white border border-gray-200 text-gray-600"}`}
        >
          All
        </button>
        {WORKSHEET_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${filter === cat.id ? "text-white" : "bg-white border border-gray-200 text-gray-600"}`}
            style={filter === cat.id ? { backgroundColor: cat.color } : {}}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      {/* Worksheet Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-12 gap-3 p-3 bg-gray-50 text-xs font-black text-gray-500 border-b border-gray-100">
          <span className="col-span-5">Title</span>
          <span className="col-span-2">Category</span>
          <span className="col-span-2">Difficulty</span>
          <span className="col-span-1">Status</span>
          <span className="col-span-2 text-right">Actions</span>
        </div>
        <div className="divide-y divide-gray-50 max-h-[600px] overflow-y-auto">
          {filtered.map((ws, i) => {
            const cat = WORKSHEET_CATEGORIES.find((c) => c.id === ws.category);
            return (
              <motion.div
                key={ws.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: Math.min(i * 0.02, 0.3) }}
                className="grid grid-cols-12 gap-3 p-3 items-center hover:bg-gray-50 transition-colors"
              >
                <div className="col-span-5 min-w-0">
                  <p className="font-bold text-gray-800 text-sm truncate">{ws.title}</p>
                  <p className="text-xs text-gray-400 truncate">{ws.slug}</p>
                </div>
                <div className="col-span-2">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-bold"
                    style={{ backgroundColor: (cat?.color || "#FF6B2B") + "20", color: cat?.color || "#FF6B2B" }}
                  >
                    {cat?.emoji} {cat?.label}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-sm">{"⭐".repeat(ws.difficulty)}</span>
                </div>
                <div className="col-span-1">
                  <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">✓ Live</span>
                </div>
                <div className="col-span-2 flex gap-1.5 justify-end">
                  <button className="text-xs px-2 py-1 bg-orange-50 text-[#FF6B2B] rounded-lg font-bold hover:bg-orange-100 transition-colors">Edit</button>
                  <button className="text-xs px-2 py-1 bg-red-50 text-red-500 rounded-lg font-bold hover:bg-red-100 transition-colors">Del</button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <p className="text-xs text-gray-400 font-bold mt-2">Showing {filtered.length} of {ALL_WORKSHEETS.length} worksheets</p>
    </div>
  );
}
