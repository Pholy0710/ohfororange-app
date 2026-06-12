"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

/* ─── Data ─── */

const ACHIEVEMENT_CARDS = [
  { icon: "⭐", title: "Stars Earned",    value: "42",    sub: "Keep collecting!",  bg: "#FFF2A6", iconColor: "#D4A000", href: "/progress" },
  { icon: "🔤", title: "Letters Learned", value: "10/26", sub: "16 more to go!",    bg: "#BFE7FF", iconColor: "#0EA5E9", href: "/letters"  },
  { icon: "🔊", title: "Sounds Learned",  value: "4/6",   sub: "Almost there!",     bg: "#D4F1C4", iconColor: "#10B981", href: "/sounds"   },
  { icon: "📖", title: "Stories Read",    value: "2/4",   sub: "2 more adventures!",bg: "#FFE4F5", iconColor: "#EC4899", href: "/stories"  },
];

const TASKS = [
  { emoji: "🔤", text: "Practice Letter B",         href: "/letters/b", done: false, bg: "#EEF0FF" },
  { emoji: "📖", text: "Read 1 Story",               href: "/stories",   done: true,  bg: "#E8FFF2" },
  { emoji: "🔗", text: "Complete a Blending Lesson", href: "/blending",  done: false, bg: "#FFF0F8" },
  { emoji: "🔊", text: "Practice the S Sound",       href: "/sounds/s",  done: false, bg: "#EEF8FF" },
];

const REWARDS = [
  { emoji: "⭐", bg: "#FFF2A6", label: "Star",    unlocked: true  },
  { emoji: "🦄", bg: "#F3E8FF", label: "Unicorn", unlocked: true  },
  { emoji: "🚀", bg: "#E0EAFF", label: "Rocket",  unlocked: true  },
  { emoji: "📚", bg: "#E0FFF4", label: "Bookworm",unlocked: false },
  { emoji: "🏆", bg: "#FFF0D4", label: "Champ",   unlocked: false },
  { emoji: "🌈", bg: "#FFE4F5", label: "Rainbow", unlocked: false },
];

const NAV_CARDS = [
  { href: "/letters",    emoji: "🔤", label: "Letters",    desc: "Learn A to Z",  from: "#7C8CFF", to: "#A0AAFF" },
  { href: "/sounds",     emoji: "🔊", label: "Sounds",     desc: "Phonics fun!",  from: "#6DDC91", to: "#5EC9A8" },
  { href: "/games",      emoji: "🎮", label: "Games",      desc: "Play & learn!", from: "#FFB84D", to: "#FFA040" },
  { href: "/stories",    emoji: "📖", label: "Stories",    desc: "Read stories",  from: "#B68DFF", to: "#D4A8FF" },
  { href: "/blending",   emoji: "🔗", label: "Blending",   desc: "Build words",   from: "#FF9ECF", to: "#FFB8DA" },
  { href: "/worksheets", emoji: "📝", label: "Worksheets", desc: "Print & do",    from: "#0EA5E9", to: "#38BDF8" },
  { href: "/progress",   emoji: "⭐", label: "Progress",   desc: "See my stars",  from: "#F59E0B", to: "#FBBF24" },
  { href: "/parent/dashboard", emoji: "👨‍👩‍👧", label: "Parents", desc: "For grown-ups", from: "#6366F1", to: "#818CF8" },
];

/* ─── Animation variants ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { type: "spring", stiffness: 280, damping: 24 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

/* ─── Component ─── */

export default function HomePage() {
  const completedTasks = TASKS.filter((t) => t.done).length;

  return (
    <div className="max-w-2xl mx-auto px-4 py-5 space-y-5">

      {/* ════════════════════════════════════
          FLOATING CLOUDS  (decorative)
      ════════════════════════════════════ */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        {[
          { top: "8%",  left: "4%",  size: "text-5xl", delay: 0 },
          { top: "15%", right: "6%", size: "text-4xl", delay: 1.5 },
          { top: "35%", left: "1%",  size: "text-3xl", delay: 0.8 },
          { top: "60%", right: "3%", size: "text-5xl", delay: 2 },
          { top: "80%", left: "6%",  size: "text-4xl", delay: 1 },
        ].map((c, i) => (
          <motion.div
            key={i}
            className={`absolute ${c.size} opacity-25 select-none`}
            style={{ top: c.top, ...(c.left ? { left: c.left } : {}), ...(c.right ? { right: (c as { right?: string }).right } : {}) }}
            animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, delay: c.delay, ease: "easeInOut" }}
          >
            ☁️
          </motion.div>
        ))}
      </div>

      {/* ════════════════════════════════════
          1. WELCOME HERO BANNER
      ════════════════════════════════════ */}
      <motion.div
        className="relative overflow-hidden rounded-[36px] p-7 shadow-2xl"
        style={{ background: "linear-gradient(135deg, #FF9ECF 0%, #B68DFF 55%, #7C8CFF 100%)" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-56 h-56 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />
        {/* Shine */}
        <div className="absolute inset-0 pointer-events-none rounded-[36px]"
             style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.22), transparent 55%)" }} />

        <div className="relative flex items-center gap-5">
          <div className="flex-1 min-w-0">
            <motion.p
              className="text-white/80 font-bold text-sm mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              👋 Hello, superstar!
            </motion.p>
            <motion.h1
              className="text-white text-4xl leading-tight mb-1"
              style={{ fontFamily: "Fredoka, cursive", fontWeight: 700 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              Great Job! 🌈
            </motion.h1>
            <motion.p
              className="text-white/85 font-semibold text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              You&apos;re becoming a reading superstar!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-5"
            >
              <Link
                href="/letters"
                className="inline-flex items-center gap-2 bg-white text-purple-600 font-bold
                           px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105
                           active:scale-95 transition-all duration-200 text-sm"
              >
                Continue Adventure 🚀
              </Link>
            </motion.div>
          </div>

          {/* Logo image */}
          <motion.div
            className="relative w-28 h-28 flex-shrink-0"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/logo.png"
              alt="OhforOrange"
              fill
              className="object-contain drop-shadow-xl"
              sizes="112px"
            />
          </motion.div>
        </div>

        {/* Stars row */}
        <div className="relative mt-5 flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                className="text-yellow-300 text-xl select-none"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
              >
                ⭐
              </motion.span>
            ))}
          </div>
          <span className="text-white/80 text-sm font-bold">42 stars earned this week!</span>
        </div>
      </motion.div>

      {/* ════════════════════════════════════
          2. READING JOURNEY PROGRESS
      ════════════════════════════════════ */}
      <motion.div
        className="adventure-card"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.15 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl" style={{ fontFamily: "Fredoka, cursive", fontWeight: 600, color: "#7C8CFF" }}>
            Reading Journey 🗺️
          </h2>
          <span className="text-3xl animate-float select-none">🌟</span>
        </div>

        {/* Progress path */}
        <div className="relative mb-3">
          <div className="h-7 overflow-hidden rounded-full" style={{ background: "#E8EDFF" }}>
            <motion.div
              className="h-full rounded-full flex items-center justify-end pr-3"
              style={{ background: "linear-gradient(90deg, #6DDC91, #7C8CFF, #B68DFF)" }}
              initial={{ width: 0 }}
              animate={{ width: "42%" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            >
              <span className="text-white text-xs font-black">42%</span>
            </motion.div>
          </div>

          {/* Level markers */}
          <div className="flex justify-between mt-2 px-1">
            {["Beginner", "Explorer", "Reader", "Superstar"].map((lvl, i) => (
              <div key={lvl} className="flex flex-col items-center gap-0.5">
                <div
                  className="w-3 h-3 rounded-full border-2 border-white shadow-sm"
                  style={{ background: i < 2 ? "linear-gradient(135deg, #6DDC91, #7C8CFF)" : "#E8EDFF" }}
                />
                <span
                  className="text-[9px] font-bold"
                  style={{ color: i < 2 ? "#7C8CFF" : "#9CA3AF" }}
                >
                  {lvl}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-500 font-semibold text-sm">
          <span style={{ color: "#7C8CFF" }} className="font-black">Level 2 Explorer</span> • 42% of your journey complete! Keep going! 🚀
        </p>
      </motion.div>

      {/* ════════════════════════════════════
          3. ACHIEVEMENT CARDS  (2×2 grid)
      ════════════════════════════════════ */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <h2 className="text-xl font-bold text-gray-600 mb-3 ml-1">
          🏅 My Achievements
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {ACHIEVEMENT_CARDS.map((card, i) => (
            <motion.div key={card.title} variants={fadeUp} custom={i}>
              <Link href={card.href}>
                <div className="achievement-card">
                  <div
                    className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl select-none"
                    style={{ backgroundColor: card.bg }}
                  >
                    {card.icon}
                  </div>
                  <h3
                    className="text-base"
                    style={{ fontFamily: "Fredoka, cursive", fontWeight: 600, color: "#374151" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="mt-1 text-3xl font-black"
                    style={{ color: card.iconColor }}
                  >
                    {card.value}
                  </p>
                  <p className="text-xs text-gray-400 font-semibold mt-0.5">{card.sub}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ════════════════════════════════════
          4. DAILY CHALLENGE
      ════════════════════════════════════ */}
      <motion.div
        className="relative overflow-hidden rounded-[32px] p-6 shadow-xl"
        style={{ background: "linear-gradient(135deg, #FFE566 0%, #FFB84D 60%, #FF8C42 100%)" }}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.2 }}
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none rounded-[32px]"
             style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent 55%)" }} />

        <div className="relative flex items-center gap-4">
          <motion.div
            className="text-6xl select-none flex-shrink-0"
            animate={{ rotate: [0, 12, -12, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🏆
          </motion.div>
          <div>
            <p className="text-white/80 text-xs font-black uppercase tracking-widest">⚡ Daily Challenge</p>
            <h2
              className="text-white text-2xl mt-0.5"
              style={{ fontFamily: "Fredoka, cursive", fontWeight: 600 }}
            >
              Read one story &amp; earn 10 bonus stars!
            </h2>
            <p className="text-white/80 text-sm font-semibold mt-1">Tap to start your challenge!</p>
          </div>
        </div>

        <Link
          href="/stories"
          className="inline-block mt-4 bg-white font-bold px-6 py-3 rounded-full
                     shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-sm"
          style={{ color: "#E27000" }}
        >
          Start Challenge 🚀
        </Link>
      </motion.div>

      {/* ════════════════════════════════════
          5. BLENDING ADVENTURE
      ════════════════════════════════════ */}
      <motion.div
        className="adventure-card"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.25 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2
              className="text-2xl"
              style={{ fontFamily: "Fredoka, cursive", fontWeight: 600, color: "#7C8CFF" }}
            >
              Blending Adventure 🚂
            </h2>
            <p className="text-gray-500 font-semibold text-sm mt-1">
              Help the word train reach the station!
            </p>
            <p className="text-xs text-gray-400 font-semibold mt-0.5">
              Next: <span style={{ color: "#B68DFF" }} className="font-black">s + a + t = sat</span>
            </p>
          </div>
          <motion.div
            className="text-6xl select-none"
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            🚂
          </motion.div>
        </div>

        {/* Mini track */}
        <div className="mt-4 flex items-center gap-1">
          {["s", "+", "a", "+", "t", "=", "sat"].map((c, i) => (
            <div
              key={i}
              className="flex-1 h-10 rounded-xl flex items-center justify-center font-black text-sm"
              style={{
                background: c === "=" || c === "+" ? "transparent" : i === 6 ? "linear-gradient(135deg, #7C8CFF, #B68DFF)" : "#EEF0FF",
                color: i === 6 ? "white" : c === "+" || c === "=" ? "#9CA3AF" : "#7C8CFF",
                minWidth: "28px",
              }}
            >
              {c}
            </div>
          ))}
        </div>

        <Link
          href="/blending"
          className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full font-bold text-white text-sm
                     hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl"
          style={{ background: "linear-gradient(135deg, #B68DFF, #7C8CFF)" }}
        >
          Continue Lesson 🔗
        </Link>
      </motion.div>

      {/* ════════════════════════════════════
          6. QUICK NAV GRID
      ════════════════════════════════════ */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <h2 className="text-xl font-bold text-gray-600 mb-3 ml-1">
          🎒 Jump To
        </h2>
        <div className="grid grid-cols-4 gap-3">
          {NAV_CARDS.map((card, i) => (
            <motion.div key={card.href} variants={fadeUp} custom={i}>
              <Link href={card.href} className="block">
                <div
                  className="relative overflow-hidden rounded-[22px] p-3 text-white text-center
                             hover:scale-[1.07] active:scale-95 transition-all duration-200 cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${card.from}, ${card.to})`,
                    boxShadow: `0 4px 16px ${card.from}50`,
                  }}
                >
                  <div className="absolute inset-0 pointer-events-none rounded-[22px]"
                       style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.22), transparent 60%)" }} />
                  <div className="relative">
                    <div className="text-3xl mb-1 select-none">{card.emoji}</div>
                    <div className="text-xs font-black leading-tight">{card.label}</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ════════════════════════════════════
          7. TODAY'S TASKS
      ════════════════════════════════════ */}
      <motion.div
        className="adventure-card"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2
            className="text-2xl"
            style={{ fontFamily: "Fredoka, cursive", fontWeight: 600, color: "#7C8CFF" }}
          >
            Today&apos;s Adventure List 📝
          </h2>
          <span
            className="text-sm font-black px-3 py-1 rounded-full"
            style={{ background: "#EEF0FF", color: "#7C8CFF" }}
          >
            {completedTasks}/{TASKS.length}
          </span>
        </div>

        <div className="space-y-2.5">
          {TASKS.map((task, i) => (
            <motion.div
              key={task.text}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
            >
              <Link href={task.href}>
                <div
                  className="flex items-center gap-3 rounded-2xl p-4 hover:scale-[1.02] transition-all duration-200"
                  style={{ background: task.bg }}
                >
                  <span className="text-2xl select-none">{task.emoji}</span>
                  <span
                    className="flex-1 font-bold text-sm"
                    style={{
                      color: task.done ? "#9CA3AF" : "#374151",
                      textDecoration: task.done ? "line-through" : "none",
                    }}
                  >
                    {task.text}
                  </span>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                    style={{
                      background: task.done
                        ? "linear-gradient(135deg, #6DDC91, #3EC478)"
                        : "rgba(0,0,0,0.06)",
                      color: task.done ? "white" : "transparent",
                    }}
                  >
                    {task.done ? "✓" : ""}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ════════════════════════════════════
          8. REWARD SHELF
      ════════════════════════════════════ */}
      <motion.div
        className="adventure-card"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.35 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2
            className="text-2xl"
            style={{ fontFamily: "Fredoka, cursive", fontWeight: 600, color: "#7C8CFF" }}
          >
            Reward Shelf 🏅
          </h2>
          <span className="text-sm text-gray-400 font-bold">
            {REWARDS.filter((r) => r.unlocked).length}/{REWARDS.length} unlocked
          </span>
        </div>

        <div className="grid grid-cols-6 gap-2.5">
          {REWARDS.map((reward, i) => (
            <motion.div
              key={reward.label}
              className="flex flex-col items-center gap-1"
              animate={reward.unlocked ? { y: [0, -4, 0] } : {}}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl select-none
                           transition-all duration-200 hover:scale-110"
                style={{
                  background: reward.unlocked ? reward.bg : "#F3F4F6",
                  opacity: reward.unlocked ? 1 : 0.4,
                  boxShadow: reward.unlocked ? "0 3px 10px rgba(0,0,0,0.1)" : "none",
                }}
              >
                {reward.unlocked ? reward.emoji : "🔒"}
              </div>
              <span
                className="text-[9px] font-bold"
                style={{ color: reward.unlocked ? "#6B7280" : "#D1D5DB" }}
              >
                {reward.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div
          className="mt-5 rounded-2xl p-4 flex items-center gap-3"
          style={{ background: "linear-gradient(135deg, #EEF0FF, #F5F3FF)" }}
        >
          <span className="text-3xl select-none">🔥</span>
          <div>
            <p className="font-black text-sm" style={{ color: "#374151" }}>3 Day Streak! Keep it up!</p>
            <div className="flex gap-1.5 mt-1">
              {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black"
                  style={
                    i < 3
                      ? { background: "linear-gradient(135deg, #7C8CFF, #B68DFF)", color: "white" }
                      : { background: "#E8EDFF", color: "#B0B8D0" }
                  }
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ════════════════════════════════════
          BRAND SECTION  (cover image)
      ════════════════════════════════════ */}
      <motion.div
        className="relative overflow-hidden rounded-[32px] shadow-xl"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.4 }}
      >
        <div className="relative h-52 w-full">
          <Image
            src="/brand-post.png"
            alt="Oh for Orange — Stay Bright, Spread Joy"
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 672px"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(60,30,120,0.65) 0%, transparent 55%)" }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p
              className="text-white text-xl"
              style={{ fontFamily: "Fredoka, cursive", fontWeight: 700 }}
            >
              Stay Bright. Spread Joy. 🍊
            </p>
            <p className="text-white/75 text-sm font-semibold">The fun way to learn to read!</p>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
