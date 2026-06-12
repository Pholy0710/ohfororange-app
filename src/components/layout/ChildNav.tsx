"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { href: "/home",       emoji: "🏠", label: "Home" },
  { href: "/letters",    emoji: "🔤", label: "Letters" },
  { href: "/sounds",     emoji: "🔊", label: "Sounds" },
  { href: "/blending",   emoji: "🔗", label: "Blend" },
  { href: "/games",      emoji: "🎮", label: "Games" },
  { href: "/stories",    emoji: "📖", label: "Stories" },
  { href: "/worksheets", emoji: "📝", label: "Sheets" },
  { href: "/progress",   emoji: "⭐", label: "Progress" },
];

export function ChildNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      {/* Rainbow top border */}
      <div
        className="h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, #7C8CFF, #B68DFF, #FF9ECF, #FFB84D, #6DDC91, #BFE7FF, #7C8CFF)",
        }}
      />

      <div className="bg-white" style={{ boxShadow: "0 -4px 24px rgba(124, 140, 255, 0.13)" }}>
        <div className="flex items-stretch overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex-1 min-w-[58px] flex flex-col items-center justify-center py-2 px-1 relative"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, #EEF0FF, #E8EDFF)" }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                {isActive && (
                  <div
                    className="absolute top-0 left-2 right-2 h-[3px] rounded-b-full"
                    style={{ background: "linear-gradient(90deg, #7C8CFF, #B68DFF)" }}
                  />
                )}
                <motion.span
                  className="relative text-xl md:text-2xl select-none"
                  animate={isActive ? { scale: [1, 1.25, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {item.emoji}
                </motion.span>
                <span
                  className="relative text-[9px] font-black mt-0.5"
                  style={{ color: isActive ? "#7C8CFF" : "#9CA3AF" }}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
