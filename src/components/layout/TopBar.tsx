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
    <header
      className="sticky top-0 z-40 shadow-xl"
      style={{ background: "linear-gradient(135deg, #FF6B2B 0%, #FF4B8B 100%)" }}
    >
      {/* Shine overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.18), transparent)" }}
      />

      <div className="relative flex items-center justify-between px-4 py-3 max-w-4xl mx-auto">
        {/* Left */}
        <div className="flex items-center gap-3">
          {backHref ? (
            <Link
              href={backHref}
              className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center
                         text-white font-bold text-xl hover:bg-white/35 transition-colors"
            >
              ←
            </Link>
          ) : (
            <Link href="/home" className="flex items-center gap-2">
              <motion.span
                className="text-2xl select-none"
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                🍊
              </motion.span>
              <span className="display-font text-white text-xl hidden sm:block drop-shadow-sm tracking-wide">
                OhforOrange
              </span>
            </Link>
          )}
          {title && (
            <h1 className="text-xl font-black text-white drop-shadow-sm">{title}</h1>
          )}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2.5">
          {showStars && (
            <motion.div
              className="flex items-center gap-1.5 bg-white/25 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/40"
              whileTap={{ scale: 0.93 }}
            >
              <span className="text-base">⭐</span>
              <span className="font-black text-white text-sm">{stars}</span>
            </motion.div>
          )}
          {rightElement}
          <Link
            href="/parent/dashboard"
            className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center
                       text-xl hover:bg-white/35 transition-colors"
            title="Parent Dashboard"
          >
            👨‍👩‍👧
          </Link>
        </div>
      </div>
    </header>
  );
}
