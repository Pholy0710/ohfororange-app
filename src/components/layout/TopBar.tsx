"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface TopBarProps {
  title?: string;
  backHref?: string;
  showStars?: boolean;
  stars?: number;
  rightElement?: React.ReactNode;
}

export function TopBar({ title, backHref, showStars = true, stars = 0, rightElement }: TopBarProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b-2 border-orange-100 shadow-soft">
      <div className="flex items-center justify-between px-4 py-3 max-w-4xl mx-auto">
        <div className="flex items-center gap-3">
          {backHref ? (
            <Link
              href={backHref}
              className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center
                         text-[#FF6B2B] font-bold text-xl hover:bg-orange-200 transition-colors"
            >
              ←
            </Link>
          ) : (
            <Link href="/home" className="flex items-center gap-2">
              <motion.span
                className="text-2xl"
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🍊
              </motion.span>
              <span className="font-black text-[#FF6B2B] text-lg hidden sm:block">OhforOrange</span>
            </Link>
          )}
          {title && (
            <h1 className="text-xl font-black text-gray-800">{title}</h1>
          )}
        </div>

        <div className="flex items-center gap-3">
          {showStars && (
            <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-200">
              <span className="text-lg">⭐</span>
              <span className="font-black text-yellow-600">{stars}</span>
            </div>
          )}
          {rightElement}
          <Link
            href="/parent/dashboard"
            className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center
                       text-xl hover:bg-orange-200 transition-colors"
            title="Parent Dashboard"
          >
            👨‍👩‍👧
          </Link>
        </div>
      </div>
    </header>
  );
}
