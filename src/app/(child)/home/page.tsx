"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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

      {/* ══════════ HERO BANNER — real cover photo ══════════ */}
      <motion.div
        className="relative overflow-hidden rounded-[2rem] mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ boxShadow: "0 10px 48px rgba(255, 107, 43, 0.45)" }}
      >
        {/* Cover photo as background */}
        <div className="relative h-56 sm:h-64 w-full">
          <Image
            src="/cover.png"
            alt="OhforOrange Cover"
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
          {/* Gradient overlay so text is readable */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)" }}
          />

          {/* Floating sparkles */}
          {["✨", "⭐", "💫"].map((emoji, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl pointer-events-none select-none"
              style={{ right: `${8 + i * 12}%`, top: `${10 + i * 10}%` }}
              animate={{ y: [0, -10, 0], rotate: [0, 15, 0], scale: [1, 1.3, 1] }}
              transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, delay: i * 0.6 }}
            >
              {emoji}
            </motion.div>
          ))}

          {/* Bottom content on cover */}
          <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
            <div>
              <p className="text-white/90 font-black text-base drop-shadow">
                Learning made fun for kids age 5! 🎉
              </p>
            </div>
            <Link
              href="/letters"
              className="flex-shrink-0 bg-white text-[#FF6B2B] font-black px-5 py-2.5 rounded-2xl text-sm
                         shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
            >
              🎮 Start!
            </Link>
          </div>
        </div>
      </motion.div>

      {/* ══════════ LOGO + TAGLINE ══════════ */}
      <motion.div
        className="flex items-center gap-4 bg-white rounded-3xl p-4 mb-4 border border-orange-100"
        style={{ boxShadow: "0 4px 20px rgba(255, 107, 43, 0.12)" }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15 }}
      >
        <div className="relative w-20 h-20 flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Oh for Orange Logo"
            fill
            className="object-contain"
            sizes="80px"
          />
        </div>
        <div>
          <h2 className="display-font text-2xl gradient-text leading-tight">Oh for Orange</h2>
          <p className="font-bold text-gray-500 text-sm">Read &amp; Play — Learn to Read! 📚</p>
          <p className="text-xs text-gray-400 font-bold mt-0.5">Stay Bright. Spread Joy. ✨</p>
        </div>
      </motion.div>

      {/* ══════════ PROGRESS SNAPSHOT ══════════ */}
      <motion.div
        className="bg-white rounded-3xl p-4 mb-4 border border-orange-100"
        style={{ boxShadow: "0 4px 20px rgba(255, 107, 43, 0.12)" }}
        initial={{ opacity: 0, x: 20 }}
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
        initial={{ opacity: 0, x: -20 }}
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
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
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

      {/* ══════════ BRAND SECTION — instagram post ══════════ */}
      <motion.div
        className="relative overflow-hidden rounded-[2rem] mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        style={{ boxShadow: "0 8px 32px rgba(255, 107, 43, 0.25)" }}
      >
        <div className="relative h-64 w-full">
          <Image
            src="/brand-post.png"
            alt="Oh for Orange — Stay Bright, Spread Joy"
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
          <div
            className="absolute inset-0 rounded-[2rem]"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-white font-black text-lg drop-shadow">Stay Bright. Spread Joy. 🍊</p>
            <p className="text-white/80 text-sm font-bold">The fun way to learn to read!</p>
          </div>
        </div>
      </motion.div>

      {/* ══════════ STREAK BANNER ══════════ */}
      <motion.div
        className="bg-white rounded-3xl p-4 border border-orange-100 flex items-center gap-3"
        style={{ boxShadow: "0 4px 20px rgba(255, 107, 43, 0.12)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
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
