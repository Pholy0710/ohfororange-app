"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getWorksheet, WORKSHEET_CATEGORIES } from "@/data/worksheets";

export default function WorksheetDetailPage() {
  const { id } = useParams<{ id: string }>();
  const ws = getWorksheet(id);

  if (!ws) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">😕</div>
        <p className="text-xl font-bold text-gray-500">Worksheet not found</p>
        <Link href="/worksheets" className="btn-primary mt-4 inline-block">← Back to Worksheets</Link>
      </div>
    );
  }

  const cat = WORKSHEET_CATEGORIES.find((c) => c.id === ws.category);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const content = generateWorksheetContent(ws);
    const blob = new Blob([content], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${ws.slug}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/worksheets" className="btn-secondary py-2 px-4 text-sm">← Worksheets</Link>
        <div className="flex-1">
          <h1 className="text-lg font-black text-gray-800 line-clamp-1">{ws.title}</h1>
        </div>
      </div>

      {/* Worksheet Preview Card */}
      <div className="bg-white rounded-3xl shadow-card border border-orange-100 overflow-hidden mb-6">
        {/* Header with OhforOrange branding */}
        <div
          className="px-6 py-4 flex items-center gap-3"
          style={{ backgroundColor: (cat?.color || "#FF6B2B") + "20" }}
        >
          <div className="text-4xl">{cat?.emoji}</div>
          <div>
            <div className="font-black text-gray-800">{ws.title}</div>
            <div className="text-xs text-gray-500 font-bold">OhforOrange Read & Play • {cat?.label}</div>
          </div>
          <div className="ml-auto text-3xl">🍊</div>
        </div>

        {/* Worksheet Content Preview */}
        <div className="p-6">
          <div className="bg-orange-50 rounded-2xl p-4 border border-orange-200 mb-4">
            <p className="font-bold text-gray-700 text-sm">📋 Instructions:</p>
            <p className="text-gray-600 font-bold text-base mt-1">{ws.instructions}</p>
          </div>

          <p className="text-sm text-gray-600 font-bold mb-4">{ws.description}</p>

          {/* Target content */}
          {ws.targetLetter && (
            <div className="flex justify-center mb-4">
              <div className="text-[100px] font-black" style={{ color: cat?.color }}>
                {ws.targetLetter}
              </div>
            </div>
          )}

          {ws.targetWord && (
            <div className="flex justify-center mb-4">
              <div className="text-4xl font-black text-[#FF6B2B] border-b-4 border-[#FF6B2B] pb-2">
                {ws.targetWord}
              </div>
            </div>
          )}

          {/* Activity lines */}
          <div className="space-y-3 mt-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-100 text-[#FF6B2B] text-xs font-black flex items-center justify-center flex-shrink-0">
                  {n}
                </span>
                <div className="flex-1 h-8 border-b-2 border-dashed border-orange-200" />
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {ws.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full font-bold"
                style={{ backgroundColor: (cat?.color || "#FF6B2B") + "20", color: cat?.color || "#FF6B2B" }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Difficulty */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-xs font-bold text-gray-400">Difficulty:</span>
            <span>{"⭐".repeat(ws.difficulty)}</span>
          </div>

          {/* OhforOrange Footer */}
          <div className="mt-6 pt-4 border-t border-orange-100 flex items-center justify-between">
            <div className="text-xs text-gray-400 font-bold">🍊 OhforOrange Read & Play</div>
            <div className="text-xs text-gray-400 font-bold">ohfororange.com</div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <button
          onClick={handlePrint}
          className="btn-primary py-4 text-lg no-print"
        >
          🖨️ Print Worksheet
        </button>
        <button
          onClick={handleDownload}
          className="btn-secondary py-4 text-lg no-print"
        >
          💾 Download
        </button>
      </div>

      {/* Related Worksheets */}
      <div className="bg-white rounded-2xl shadow-soft p-4 border border-orange-100">
        <h3 className="font-black text-gray-700 mb-3">More in {cat?.label}:</h3>
        <Link
          href={`/worksheets?category=${ws.category}`}
          className="text-sm text-[#FF6B2B] font-bold hover:underline"
        >
          View all {cat?.label} worksheets →
        </Link>
      </div>
    </div>
  );
}

function generateWorksheetContent(ws: ReturnType<typeof getWorksheet>): string {
  if (!ws) return "";
  return `<!DOCTYPE html>
<html>
<head>
  <title>${ws.title} - OhforOrange</title>
  <style>
    body { font-family: 'Nunito', Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; }
    h1 { color: #FF6B2B; font-size: 28px; }
    .header { display: flex; align-items: center; justify-content: space-between; border-bottom: 3px solid #FF6B2B; padding-bottom: 16px; margin-bottom: 24px; }
    .instructions { background: #FFF3EE; padding: 16px; border-radius: 12px; margin-bottom: 24px; }
    .trace-lines { margin-top: 24px; }
    .trace-line { height: 60px; border-bottom: 2px solid #ddd; margin-bottom: 16px; }
    .footer { border-top: 2px solid #FF6B2B; margin-top: 40px; padding-top: 12px; display: flex; justify-content: space-between; font-size: 12px; color: #999; }
    @media print { body { padding: 20px; } }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <h1>${ws.title}</h1>
      <p style="color: #666; font-size: 14px;">OhforOrange Read & Play</p>
    </div>
    <div style="font-size: 48px;">🍊</div>
  </div>

  <div class="instructions">
    <strong>Instructions:</strong> ${ws.instructions}
  </div>

  <p>${ws.description}</p>

  <div class="trace-lines">
    ${[1, 2, 3, 4, 5].map(n => `<div class="trace-line"></div>`).join("")}
  </div>

  <div class="footer">
    <span>🍊 OhforOrange Read & Play</span>
    <span>Name: ________________</span>
    <span>Date: ________________</span>
  </div>
</body>
</html>`;
}
