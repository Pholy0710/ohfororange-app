"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ALL_WORKSHEETS, WORKSHEET_CATEGORIES, type WorksheetCategory } from "@/data/worksheets";

export default function WorksheetsPage() {
  const [activeCategory, setActiveCategory] = useState<WorksheetCategory | "ALL">("ALL");
  const [search, setSearch] = useState("");

  const filtered = ALL_WORKSHEETS.filter((w) => {
    const matchCat = activeCategory === "ALL" || w.category === activeCategory;
    const matchSearch =
      !search ||
      w.title.toLowerCase().includes(search.toLowerCase()) ||
      w.tags.some((t) => t.includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="text-center mb-6">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="text-6xl mb-3">
          📝
        </motion.div>
        <h1 className="section-title">Worksheet Library!</h1>
        <p className="text-gray-500 font-bold">{ALL_WORKSHEETS.length}+ printable worksheets</p>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="🔍 Search worksheets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 rounded-2xl border-2 border-orange-200 bg-white font-bold
                     focus:outline-none focus:border-[#FF6B2B] text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
        <button
          onClick={() => setActiveCategory("ALL")}
          className={`px-4 py-2 rounded-xl font-black text-sm whitespace-nowrap transition-all
                     ${activeCategory === "ALL"
                       ? "bg-[#FF6B2B] text-white"
                       : "bg-white text-gray-500 border border-orange-100"}`}
        >
          All ({ALL_WORKSHEETS.length})
        </button>
        {WORKSHEET_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl font-black text-sm whitespace-nowrap transition-all
                       ${activeCategory === cat.id
                         ? "text-white"
                         : "bg-white text-gray-500 border border-orange-100"}`}
            style={activeCategory === cat.id ? { backgroundColor: cat.color } : {}}
          >
            {cat.emoji} {cat.label} ({cat.count})
          </button>
        ))}
      </div>

      {/* Category Overview Cards */}
      {activeCategory === "ALL" && !search && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          {WORKSHEET_CATEGORIES.map((cat, i) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setActiveCategory(cat.id)}
              className="rounded-2xl p-4 text-white text-center shadow-card hover:shadow-card-hover hover:scale-105 transition-all"
              style={{ backgroundColor: cat.color }}
            >
              <div className="text-3xl mb-1">{cat.emoji}</div>
              <div className="font-black text-sm">{cat.label}</div>
              <div className="text-xs opacity-90 font-bold">{cat.count} sheets</div>
            </motion.button>
          ))}
        </div>
      )}

      {/* Worksheet Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((ws, i) => {
          const cat = WORKSHEET_CATEGORIES.find((c) => c.id === ws.category);
          return (
            <motion.div
              key={ws.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.04, 0.4) }}
            >
              <Link href={`/worksheets/${ws.id}`}>
                <div className="worksheet-card">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ backgroundColor: (cat?.color || "#FF6B2B") + "20" }}
                    >
                      {cat?.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-black text-gray-800 text-sm leading-tight">{ws.title}</h3>
                      <p className="text-xs text-gray-500 font-bold mt-0.5 line-clamp-1">{ws.description}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {ws.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full font-bold"
                            style={{ backgroundColor: (cat?.color || "#FF6B2B") + "20", color: cat?.color || "#FF6B2B" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <span className="text-xs text-gray-400">{"⭐".repeat(ws.difficulty)}</span>
                      <span className="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-bold">
                        🖨️ Print
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <div className="text-5xl mb-3">🔍</div>
          <p className="font-bold text-gray-500">No worksheets found</p>
        </div>
      )}

      {/* Print Pack CTA */}
      <motion.div
        className="mt-6 bg-gradient-to-r from-[#FF6B2B] to-[#FFD93D] rounded-3xl p-5 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="font-black text-lg">📦 Download the Full Pack!</h2>
        <p className="text-sm opacity-90 mt-1">Get all 120+ worksheets in one PDF bundle!</p>
        <Link
          href="/parent/worksheets"
          className="inline-block mt-3 bg-white text-[#FF6B2B] font-black px-4 py-2 rounded-xl text-sm hover:bg-orange-50 transition-colors"
        >
          Get Worksheet Pack →
        </Link>
      </motion.div>
    </div>
  );
}
