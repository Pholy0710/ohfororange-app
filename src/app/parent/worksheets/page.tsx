"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ALL_WORKSHEETS, WORKSHEET_CATEGORIES } from "@/data/worksheets";

export default function ParentWorksheetsPage() {
  const [selectedPack, setSelectedPack] = useState<string | null>(null);

  const PACKS = [
    {
      id: "weekly-starter",
      name: "Weekly Starter Pack",
      emoji: "📦",
      description: "Perfect for one week of learning — includes letters, phonics, and CVC words",
      sheets: ALL_WORKSHEETS.filter((w) => ["ALPHABET", "PHONICS"].includes(w.category)).slice(0, 10),
      color: "#FF6B2B",
    },
    {
      id: "phonics-bundle",
      name: "Complete Phonics Bundle",
      emoji: "🔊",
      description: "All 25 phonics worksheets for sounds s, a, t, p, i, n",
      sheets: ALL_WORKSHEETS.filter((w) => w.category === "PHONICS"),
      color: "#6BC5F8",
    },
    {
      id: "cvc-mastery",
      name: "CVC Word Mastery Pack",
      emoji: "📝",
      description: "All 30 CVC word worksheets — great for building reading skills",
      sheets: ALL_WORKSHEETS.filter((w) => w.category === "CVC_WORDS"),
      color: "#6BCFB5",
    },
    {
      id: "full-library",
      name: "Complete Library (All 120+)",
      emoji: "🏆",
      description: "Every worksheet — the ultimate printable resource pack",
      sheets: ALL_WORKSHEETS,
      color: "#B57BEB",
    },
  ];

  const handleDownloadPack = (pack: typeof PACKS[0]) => {
    const htmlContent = generatePackHTML(pack);
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `OhforOrange-${pack.id}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-800 mb-1">📝 Worksheet Manager</h1>
        <p className="text-gray-500 font-bold">Download and print worksheet packs for Emma</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Total Worksheets", value: ALL_WORKSHEETS.length, emoji: "📝" },
          { label: "Categories", value: WORKSHEET_CATEGORIES.length, emoji: "📂" },
          { label: "Downloaded", value: "23", emoji: "💾" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl shadow-soft p-4 border border-orange-100 text-center"
          >
            <div className="text-3xl">{stat.emoji}</div>
            <div className="text-2xl font-black text-[#FF6B2B]">{stat.value}</div>
            <div className="text-xs text-gray-500 font-bold">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Worksheet Packs */}
      <h2 className="text-xl font-black text-gray-800 mb-4">📦 Download Packs</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {PACKS.map((pack, i) => (
          <motion.div
            key={pack.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-3xl shadow-card p-5 border border-orange-100"
          >
            <div className="flex items-start gap-3 mb-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ backgroundColor: pack.color + "20" }}
              >
                {pack.emoji}
              </div>
              <div>
                <h3 className="font-black text-gray-800">{pack.name}</h3>
                <p className="text-sm text-gray-500 font-bold mt-0.5">{pack.description}</p>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-bold mt-1 inline-block"
                  style={{ backgroundColor: pack.color + "20", color: pack.color }}
                >
                  {pack.sheets.length} worksheets
                </span>
              </div>
            </div>

            <div className="flex gap-2 flex-wrap text-xs mb-3">
              {pack.sheets.slice(0, 4).map((ws) => (
                <span key={ws.id} className="bg-gray-50 text-gray-500 px-2 py-0.5 rounded-lg font-bold border">
                  {ws.title.replace("Trace the Letter ", "").replace("Match ", "").slice(0, 20)}
                </span>
              ))}
              {pack.sheets.length > 4 && (
                <span className="text-gray-400 font-bold">+{pack.sheets.length - 4} more</span>
              )}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleDownloadPack(pack)}
                className="btn-primary flex-1 text-sm py-2.5"
                style={{ background: `linear-gradient(135deg, ${pack.color}, ${pack.color}cc)` }}
              >
                💾 Download Pack
              </button>
              <button
                onClick={() => window.print()}
                className="btn-secondary flex-1 text-sm py-2.5"
              >
                🖨️ Print Pack
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Individual Worksheets */}
      <h2 className="text-xl font-black text-gray-800 mb-4">📄 Individual Worksheets</h2>
      <div className="bg-white rounded-3xl shadow-card border border-orange-100 overflow-hidden">
        <div className="p-4 bg-orange-50 border-b border-orange-100">
          <div className="grid grid-cols-3 text-sm font-black text-gray-600">
            <span>Worksheet</span>
            <span className="text-center">Category</span>
            <span className="text-right">Actions</span>
          </div>
        </div>
        <div className="divide-y divide-gray-50">
          {ALL_WORKSHEETS.slice(0, 15).map((ws) => {
            const cat = WORKSHEET_CATEGORIES.find((c) => c.id === ws.category);
            return (
              <div key={ws.id} className="p-4 flex items-center gap-3 hover:bg-orange-50/50 transition-colors">
                <span className="text-xl">{cat?.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-800 text-sm">{ws.title}</p>
                  <p className="text-xs text-gray-400">{ws.description.slice(0, 50)}...</p>
                </div>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-bold flex-shrink-0"
                  style={{ backgroundColor: (cat?.color || "#FF6B2B") + "20", color: cat?.color || "#FF6B2B" }}
                >
                  {cat?.label}
                </span>
                <div className="flex gap-2 flex-shrink-0">
                  <Link
                    href={`/worksheets/${ws.id}`}
                    className="text-xs bg-[#FF6B2B] text-white px-3 py-1.5 rounded-xl font-bold hover:bg-orange-600 transition-colors"
                  >
                    View
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="p-4 text-center border-t border-orange-100">
          <Link href="/worksheets" className="text-sm font-bold text-[#FF6B2B] hover:underline">
            View all {ALL_WORKSHEETS.length} worksheets in child mode →
          </Link>
        </div>
      </div>
    </div>
  );
}

function generatePackHTML(pack: { name: string; sheets: { title: string; description: string; instructions: string; slug: string }[] }): string {
  return `<!DOCTYPE html>
<html>
<head>
  <title>${pack.name} - OhforOrange</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap');
    * { font-family: 'Nunito', Arial, sans-serif; box-sizing: border-box; }
    body { padding: 0; margin: 0; background: #FFF8F4; }
    .cover { background: linear-gradient(135deg, #FF6B2B, #FFA07A); color: white; padding: 60px 40px; text-align: center; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    .cover h1 { font-size: 48px; font-weight: 900; margin: 0; }
    .cover .subtitle { font-size: 20px; margin-top: 10px; opacity: 0.9; }
    .cover .logo { font-size: 80px; margin-bottom: 20px; }
    .worksheet { padding: 40px; page-break-before: always; min-height: 100vh; }
    .ws-header { display: flex; align-items: center; justify-content: space-between; border-bottom: 4px solid #FF6B2B; padding-bottom: 16px; margin-bottom: 24px; }
    .ws-title { font-size: 24px; font-weight: 900; color: #FF6B2B; }
    .ws-brand { color: #999; font-size: 14px; }
    .ws-instructions { background: #FFF3EE; padding: 16px; border-radius: 12px; margin-bottom: 24px; border-left: 4px solid #FF6B2B; }
    .ws-content { margin-top: 24px; }
    .trace-line { height: 70px; border-bottom: 2px dashed #FF6B2B; margin-bottom: 20px; }
    .ws-footer { border-top: 2px solid #FFD93D; margin-top: 40px; padding-top: 12px; display: flex; justify-content: space-between; font-size: 12px; color: #999; }
    @media print { .cover { page-break-after: always; } }
  </style>
</head>
<body>
  <div class="cover">
    <div class="logo">🍊</div>
    <h1>${pack.name}</h1>
    <div class="subtitle">OhforOrange Read & Play · ${pack.sheets.length} Worksheets</div>
    <div style="margin-top: 30px; font-size: 16px; opacity: 0.8;">Child's Name: ________________________</div>
  </div>

  ${pack.sheets.map((ws, i) => `
  <div class="worksheet">
    <div class="ws-header">
      <div>
        <div class="ws-title">${ws.title}</div>
        <div class="ws-brand">🍊 OhforOrange Read & Play · Page ${i + 1}</div>
      </div>
      <div style="font-size: 40px;">📝</div>
    </div>

    <div class="ws-instructions">
      <strong>Instructions:</strong> ${ws.instructions}
    </div>

    <p style="color: #666; font-size: 16px;">${ws.description}</p>

    <div class="ws-content">
      ${[1, 2, 3, 4, 5].map(() => `<div class="trace-line"></div>`).join("")}
    </div>

    <div class="ws-footer">
      <span>🍊 OhforOrange Read & Play</span>
      <span>Name: ________________</span>
      <span>Date: ________________</span>
    </div>
  </div>
  `).join("")}
</body>
</html>`;
}
