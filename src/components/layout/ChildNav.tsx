"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { href: "/home", emoji: "🏠", label: "Home" },
  { href: "/letters", emoji: "🔤", label: "Letters" },
  { href: "/sounds", emoji: "🔊", label: "Sounds" },
  { href: "/blending", emoji: "🔗", label: "Blend" },
  { href: "/games", emoji: "🎮", label: "Games" },
  { href: "/stories", emoji: "📖", label: "Stories" },
  { href: "/worksheets", emoji: "📝", label: "Sheets" },
  { href: "/progress", emoji: "⭐", label: "Progress" },
];

export function ChildNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-orange-200 shadow-lg">
      <div className="flex items-stretch overflow-x-auto scrollbar-hide">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex-1 min-w-[60px] flex flex-col items-center justify-center py-2 px-1 relative"
            >
              {isActive && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-orange-50 border-t-4 border-[#FF6B2B]"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative text-xl md:text-2xl">{item.emoji}</span>
              <span
                className={`relative text-[10px] font-bold mt-0.5 ${
                  isActive ? "text-[#FF6B2B]" : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
