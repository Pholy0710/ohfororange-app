"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SparklesBackground } from "@/components/shared/SparklesBackground";
import { OrangeMascot } from "@/components/shared/OrangeMascot";
import { ProgressBar } from "@/components/shared/ProgressBar";

const NAV_CARDS = [
  { href: "/letters",    emoji: "🔤", label: "Letters",    desc: "Learn A to Z",    from: "#FF6B2B", to: "#FFA07A" },
  { href: "/sounds",     emoji: "🔊", label: "Sounds",     desc: "Phonics fun!",    from: "#6BC5F8", to: "#4AADEB" },
  { href: "/blending",   emoji: "🔗", label: "Blending",   desc: "Build words",     from: "#6BCFB5", to: "#48B89F" },
  { href: "/games",      emoji: "🎮", label: "Games",      desc: "Play & learn",    from: "#FFD93D", to: "#FFBF00" },
  { href: "/stories",    emoji: "📖", label: "Stories",    desc: "Read stories",    from: "#B57BEB", to: "#9B59D6" },
  { href: "/worksheets", emoji: "📝", label: "Worksheets", desc: "Print & do",      from: "#FF8FAB", to: "#FF6B8B" },
  { href: "/progress",   emoji: "⭐", label: "Progress",   desc: "See my stars",    from: "#52C97A", to: "#3DB56A" },
  { href: "/parent/dashboard", emoji: "👨‍👩‍👧", label: "Parents", desc: "For grown-ups", from: "#FF6B2B", to: "#E55B1E" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300 } },
};

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF3EE] via-[#FFF8F4] to-[#FFEEDD] pointer-events-none" />
      <SparklesBackground count={15} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <OrangeMascot size="xl" expression="excited" />
          </div>
          <motion.h1
            className="text-4xl md:text-5xl font-black text-[#FF6B2B] leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            OhforOrange
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-bold text-gray-600 mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Read &amp; Play! 📚✨
          </motion.p>
        </div>

        {/* Progress Banner */}
        <motion.div
          className="bg-white rounded-3xl shadow-card p-5 mb-6 border-2 border-orange-100"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="font-black text-lg text-gray-800">My Reading Journey 🌟</h2>
              <p className="text-sm text-gray-500">Keep going — you&apos;re amazing!</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-black text-[#FF6B2B]">⭐ 42</div>
              <div className="text-xs text-gray-400 font-bold">stars earned</div>
            </div>
          </div>
          <ProgressBar value={42} max={100} label="Overall Progress" showPercent />
          <div className="grid grid-cols-3 gap-3 mt-4">
            {[
              { label: "Letters", value: 10, max: 26, emoji: "🔤" },
              { label: "Sounds",  value: 4,  max: 6,  emoji: "🔊" },
              { label: "Stories", value: 2,  max: 4,  emoji: "📖" },
            ].map((stat) => (
              <div key={stat.label} className="bg-orange-50 rounded-2xl p-3 text-center">
                <div className="text-2xl">{stat.emoji}</div>
                <div className="font-black text-[#FF6B2B] text-lg">{stat.value}/{stat.max}</div>
                <div className="text-xs text-gray-500 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Daily Challenge Card */}
        <motion.div
          className="bg-gradient-to-r from-[#FFD93D] to-[#FF6B2B] rounded-3xl shadow-card p-5 mb-6 text-white"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-bold opacity-90">⚡ Daily Challenge</div>
              <h3 className="text-xl font-black mt-1">Find 5 things starting with S!</h3>
              <p className="text-sm opacity-90 mt-1">Look around you! ssssss 🐍</p>
            </div>
            <div className="text-5xl animate-bounce-gentle">🎯</div>
          </div>
          <div className="mt-3">
            <Link
              href="/sounds/s"
              className="inline-block bg-white text-[#FF6B2B] font-black px-4 py-2 rounded-xl text-sm hover:bg-orange-50 transition-colors"
            >
              Start Challenge →
            </Link>
          </div>
        </motion.div>

        {/* Continue Learning */}
        <motion.div
          className="bg-gradient-to-r from-[#6BCFB5] to-[#6BC5F8] rounded-3xl shadow-card p-5 mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-bold opacity-90">▶ Continue Learning</div>
              <h3 className="text-xl font-black mt-1">Blending: s + a + t</h3>
              <p className="text-sm opacity-90 mt-1">You were learning to blend words!</p>
            </div>
            <div className="text-5xl animate-float">🔗</div>
          </div>
          <Link
            href="/blending"
            className="block mt-3 bg-white text-[#6BC5F8] font-black px-4 py-2 rounded-xl text-sm text-center hover:bg-blue-50 transition-colors"
          >
            Continue Now →
          </Link>
        </motion.div>

        {/* Main Navigation Cards */}
        <motion.h2
          className="text-2xl font-black text-gray-700 mb-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          What do you want to learn? 🎉
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {NAV_CARDS.map((card) => (
            <motion.div key={card.href} variants={item}>
              <Link href={card.href} className="block group">
                <div
                  className="rounded-3xl p-5 text-white shadow-card hover:shadow-card-hover hover:scale-105 active:scale-95 transition-all duration-200 text-center cursor-pointer"
                  style={{ background: `linear-gradient(135deg, ${card.from} 0%, ${card.to} 100%)` }}
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-200">
                    {card.emoji}
                  </div>
                  <div className="font-black text-lg leading-tight">{card.label}</div>
                  <div className="text-xs opacity-90 font-bold mt-0.5">{card.desc}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Streak Banner */}
        <motion.div
          className="mt-6 bg-white rounded-3xl shadow-soft p-4 border border-orange-100 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-4xl animate-bounce-gentle">🔥</div>
          <div>
            <div className="font-black text-lg text-gray-800">3 Day Streak! 🎉</div>
            <div className="text-sm text-gray-500">You&apos;ve learned something every day this week!</div>
          </div>
          <div className="ml-auto flex gap-1">
            {["M","T","W","T","F","S","S"].map((day, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black
                           ${i < 3 ? "bg-[#FF6B2B] text-white" : "bg-orange-100 text-orange-300"}`}
              >
                {day}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
