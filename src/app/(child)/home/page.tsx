"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProgressBar } from "@/components/shared/ProgressBar";

const NAV_CARDS = [
  { href: "/letters",          emoji: "🔤", label: "Letters",    desc: "Learn A to Z",    from: "#FF6B2B", to: "#FF8C42" },
  { href: "/sounds",           emoji: "🔊", label: "Sounds",     desc: "Phonics fun!",    from: "#0EA5E9", to: "#38BDF8" },
  { href: "/blending",         emoji: "🔗", label: "Blending",   desc: "Build words",     from: "#10B981", to: "#34D399" },
  { href: "/games",            emoji: "🎮", label: "Games",      desc: "Play & learn",    from: "#F59E0B", to: "#FBBF24" },
  { href: "/stories",          emoji: "📖", label: "Stories",    desc: "Read stories",    from: "#8B5CF6", to: "#A78BFA" },
  { href: "/worksheets",       emoji: "📝", label: "Worksheets", desc: "Print & do",      from: "#EC4899", to: "#F472B6" },
  { href: "/progress",         emoji: "⭐", label: "Progress",   desc: "See my stars",    from: "#EF4444", to: "#F87171" },
  { href: "/parent/dashboard", emoji: "👨‍👩‍👧", label: "Parents",   desc: "For grown-ups",   from: "#6366F1", to: "#818CF8" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.85 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300 } },
};

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-4">

      {/* ══════════ HERO BANNER ══════════ */}
      <motion.div
        className="relative overflow-hidden rounded-[2rem] mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: "linear-gradient(135deg, #FF6B2B 0%, #FF4B8B 55%, #8B5CF6 100%)",
          boxShadow: "0 8px 40px rgba(255, 107, 43, 0.45)",
        }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-52 h-52 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 pointer-events-none" />
        {/* Top shine */}
        <div className="absolute inset-0 pointer-events-none rounded-[2rem]"
             style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent 55%)" }} />

        {/* Floating sparkles */}
        {["✨", "⭐", "💫", "🌟"].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-xl pointer-events-none select-none opacity-70"
            style={{ left: `${14 + i * 19}%`, top: `${8 + (i % 2) * 18}%` }}
            animate={{ y: [0, -9, 0], rotate: [0, 15, 0], scale: [1, 1.25, 1] }}
            transition={{ duration: 2.4 + i * 0.4, repeat: Infinity, delay: i * 0.55 }}
          >
            {emoji}
          </motion.div>
        ))}

        {/* Content */}
        <div className="relative z-10 p-6 flex items-center gap-5">
          <motion.div
            className="text-7xl select-none flex-shrink-0"
            animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            🍊
          </motion.div>
          <div className="flex-1 min-w-0">
            <h1 className="display-font text-4xl md:text-5xl text-white leading-none mb-1 drop-shadow-lg">
              OhforOrange
            </h1>
            <p className="text-white/90 font-black text-lg">Read &amp; Play! 📚</p>
            <p className="text-white/75 font-semibold text-sm mt-0.5">
              Learning made fun for kids age 5! ✨
            </p>
            <Link
              href="/letters"
              className="inline-flex items-center gap-2 mt-3 bg-white text-[#FF6B2B] font-black
                         px-5 py-2.5 rounded-2xl text-sm shadow-lg hover:shadow-xl
                         hover:scale-105 active:scale-95 transition-all duration-200"
            >
              🎮 Start Learning!
            </Link>
          </div>
        </div>
      </motion.div>

      {/* ══════════ PROGRESS SNAPSHOT ══════════ */}
      <motion.div
        className="bg-white rounded-3xl p-4 mb-4 border border-orange-100"
        style={{ boxShadow: "0 4px 20px rgba(255, 107, 43, 0.12)" }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-black text-base text-gray-800">My Reading Journey 🌟</h2>
            <p className="text-xs text-gray-400 font-bold">Keep going — you&apos;re amazing!</p>
          </div>
          <div
            className="flex items-center gap-1.5 text-white px-3 py-1.5 rounded-full"
            style={{ background: "linear-gradient(135deg, #FF6B2B, #FF4B8B)" }}
          >
            <span>⭐</span>
            <span className="font-black text-lg">42</span>
            <span className="text-xs opacity-90">stars</span>
          </div>
        </div>
        <ProgressBar value={42} max={100} label="Overall Progress" showPercent />
        <div className="grid grid-cols-3 gap-2 mt-3">
          {[
            { label: "Letters", value: 10, max: 26, emoji: "🔤", color: "#FF6B2B" },
            { label: "Sounds",  value: 4,  max: 6,  emoji: "🔊", color: "#0EA5E9" },
            { label: "Stories", value: 2,  max: 4,  emoji: "📖", color: "#8B5CF6" },
          ].map((stat) => (
            <div key={stat.label} className="bg-orange-50 rounded-2xl p-3 text-center">
              <div className="text-2xl">{stat.emoji}</div>
              <div className="font-black text-lg" style={{ color: stat.color }}>{stat.value}/{stat.max}</div>
              <div className="text-xs text-gray-400 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ══════════ DAILY CHALLENGE ══════════ */}
      <motion.div
        className="relative overflow-hidden rounded-3xl p-5 mb-4 text-white"
        style={{ background: "linear-gradient(135deg, #F59E0B 0%, #FF6B2B 100%)", boxShadow: "0 6px 28px rgba(245, 158, 11, 0.4)" }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="shine-top" />
        <div className="relative flex items-center justify-between">
          <div>
            <div className="text-xs font-black opacity-90 uppercase tracking-widest mb-1">⚡ Daily Challenge</div>
            <h3 className="text-xl font-black">Find 5 things starting with S!</h3>
            <p className="text-sm opacity-80 mt-0.5">Look around you! ssssss 🐍</p>
          </div>
          <motion.div
            className="text-5xl flex-shrink-0"
            animate={{ rotate: [0, 12, -12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >🎯</motion.div>
        </div>
        <Link
          href="/sounds/s"
          className="inline-block mt-3 bg-white text-[#FF6B2B] font-black px-4 py-2 rounded-xl text-sm hover:bg-orange-50 transition-colors"
        >
          Start Challenge →
        </Link>
      </motion.div>

      {/* ══════════ CONTINUE LEARNING ══════════ */}
      <motion.div
        className="relative overflow-hidden rounded-3xl p-5 mb-5 text-white"
        style={{ background: "linear-gradient(135deg, #10B981 0%, #0EA5E9 100%)", boxShadow: "0 6px 28px rgba(16, 185, 129, 0.35)" }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="shine-top" />
        <div className="relative flex items-center justify-between">
          <div>
            <div className="text-xs font-black opacity-90 uppercase tracking-widest mb-1">▶ Continue Learning</div>
            <h3 className="text-xl font-black">Blending: s + a + t</h3>
            <p className="text-sm opacity-80 mt-0.5">You were learning to blend words!</p>
          </div>
          <motion.div
            className="text-5xl flex-shrink-0"
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >🔗</motion.div>
        </div>
        <Link
          href="/blending"
          className="block mt-3 bg-white text-[#10B981] font-black px-4 py-2 rounded-xl text-sm text-center hover:bg-green-50 transition-colors"
        >
          Continue Now →
        </Link>
      </motion.div>

      {/* ══════════ NAV CARDS ══════════ */}
      <motion.h2
        className="text-xl font-black text-gray-700 mb-3 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        What do you want to learn? 🎉
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {NAV_CARDS.map((card) => (
          <motion.div key={card.href} variants={item}>
            <Link href={card.href} className="block group">
              <div
                className="relative overflow-hidden rounded-3xl p-5 text-white text-center cursor-pointer
                           hover:scale-[1.07] active:scale-[0.96] transition-all duration-200"
                style={{
                  background: `linear-gradient(135deg, ${card.from} 0%, ${card.to} 100%)`,
                  boxShadow: `0 6px 24px ${card.from}55`,
                }}
              >
                <div className="shine-top rounded-3xl" />
                <div className="relative">
                  <motion.div
                    className="text-5xl mb-2 select-none"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {card.emoji}
                  </motion.div>
                  <div className="font-black text-lg leading-tight drop-shadow-sm">{card.label}</div>
                  <div className="text-xs opacity-90 font-bold mt-0.5">{card.desc}</div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* ══════════ STREAK BANNER ══════════ */}
      <motion.div
        className="bg-white rounded-3xl p-4 border border-orange-100 flex items-center gap-3"
        style={{ boxShadow: "0 4px 20px rgba(255, 107, 43, 0.12)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <motion.div
          className="text-4xl select-none"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          🔥
        </motion.div>
        <div className="flex-1">
          <div className="font-black text-base text-gray-800">3 Day Streak! 🎉</div>
          <div className="text-xs text-gray-400 font-bold">You&apos;ve learned every day this week!</div>
        </div>
        <div className="flex gap-1">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black"
              style={
                i < 3
                  ? { background: "linear-gradient(135deg, #FF6B2B, #FF4B8B)", color: "white" }
                  : { backgroundColor: "#FFE8D8", color: "#FFBE9D" }
              }
            >
              {day}
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
