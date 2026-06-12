"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const GAMES = [
  {
    href: "/games/sound-hunt",
    title: "Sound Hunt",
    emoji: "🎯",
    description: "Tap pictures that start with the target sound!",
    from: "#FF6B2B", to: "#FF8C42",
    badge: "🌟 Popular",
    difficulty: "Easy",
  },
  {
    href: "/games/build-word",
    title: "Build the Word",
    emoji: "🏗️",
    description: "Drag letters into the right places to build a word!",
    from: "#0EA5E9", to: "#38BDF8",
    badge: "🔥 Hot",
    difficulty: "Medium",
  },
  {
    href: "/games/match-rhyme",
    title: "Match the Rhyme",
    emoji: "🎵",
    description: "Find the word that rhymes with each picture!",
    from: "#10B981", to: "#34D399",
    badge: "🎶 Fun",
    difficulty: "Easy",
  },
  {
    href: "/games/pop-letter",
    title: "Pop the Letter",
    emoji: "🎈",
    description: "Pop balloons with the target letter before they float away!",
    from: "#F59E0B", to: "#FBBF24",
    badge: "⚡ Fast",
    difficulty: "Medium",
  },
  {
    href: "/games/treasure-trail",
    title: "Treasure Trail",
    emoji: "🗺️",
    description: "Follow clues and find treasure along the way!",
    from: "#8B5CF6", to: "#A78BFA",
    badge: "🏆 Adventure",
    difficulty: "Hard",
  },
];

export default function GamesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-4">

      {/* ══════════ HERO HEADER ══════════ */}
      <motion.div
        className="relative overflow-hidden rounded-[2rem] mb-5 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #8B5CF6 0%, #0EA5E9 100%)",
          boxShadow: "0 8px 36px rgba(139, 92, 246, 0.4)",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="absolute top-0 right-0 w-44 h-44 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none rounded-[2rem]"
             style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.18), transparent 55%)" }} />

        <div className="relative p-6">
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 280 }}
            className="text-6xl mb-2 select-none"
          >
            🎮
          </motion.div>
          <h1 className="display-font text-4xl drop-shadow-md">Reading Games!</h1>
          <p className="text-white/90 font-bold mt-1">Play games and learn to read!</p>
          <div className="flex justify-center gap-2 mt-3">
            {GAMES.map((g) => (
              <span
                key={g.href}
                className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center text-xl select-none"
              >
                {g.emoji}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ══════════ GAME CARDS ══════════ */}
      <div className="space-y-3">
        {GAMES.map((game, i) => (
          <motion.div
            key={game.href}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <Link href={game.href}>
              <div
                className="relative overflow-hidden rounded-3xl p-5 text-white cursor-pointer
                           hover:scale-[1.02] active:scale-[0.99] transition-all duration-200"
                style={{
                  background: `linear-gradient(135deg, ${game.from} 0%, ${game.to} 100%)`,
                  boxShadow: `0 6px 24px ${game.from}55`,
                }}
              >
                <div className="absolute inset-0 pointer-events-none rounded-3xl"
                     style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent 50%)" }} />

                <div className="relative flex items-center gap-4">
                  <div className="text-6xl select-none">{game.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="text-xl font-black drop-shadow-sm">{game.title}</h3>
                      <span className="text-xs bg-white/30 backdrop-blur-sm px-2 py-0.5 rounded-full font-bold">
                        {game.badge}
                      </span>
                    </div>
                    <p className="text-sm opacity-90 font-bold">{game.description}</p>
                    <div className="mt-2">
                      <span className="text-xs bg-white/20 px-2.5 py-0.5 rounded-full font-bold">
                        {game.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="text-3xl opacity-80 font-black flex-shrink-0">→</div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ══════════ BEST SCORES ══════════ */}
      <motion.div
        className="mt-5 bg-white rounded-3xl p-5 border border-orange-100"
        style={{ boxShadow: "0 4px 20px rgba(255, 107, 43, 0.12)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-lg font-black text-gray-800 mb-3">🏆 My Best Scores</h2>
        <div className="space-y-2.5">
          {GAMES.map((game) => (
            <div key={game.href} className="flex items-center gap-3">
              <span className="text-xl select-none">{game.emoji}</span>
              <span className="font-bold text-gray-600 flex-1 text-sm">{game.title}</span>
              <div className="flex gap-0.5">
                {[1, 2, 3].map((star) => (
                  <span key={star} className="text-xl text-gray-200 select-none">☆</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
