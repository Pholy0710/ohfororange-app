"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const GAMES = [
  { href: "/games/sound-hunt",     title: "Sound Hunt",       emoji: "🎯", description: "Tap pictures that start with the target sound!", from: "#FF6B2B", to: "#FFA07A", badge: "🌟 Popular", difficulty: "Easy" },
  { href: "/games/build-word",     title: "Build the Word",   emoji: "🏗️", description: "Drag letters into the right places to build a word!", from: "#6BC5F8", to: "#4AADEB", badge: "🔥 Hot", difficulty: "Medium" },
  { href: "/games/match-rhyme",    title: "Match the Rhyme",  emoji: "🎵", description: "Find the word that rhymes with each picture!", from: "#6BCFB5", to: "#48B89F", badge: "🎶 Fun", difficulty: "Easy" },
  { href: "/games/pop-letter",     title: "Pop the Letter",   emoji: "🎈", description: "Pop balloons with the target letter before they float away!", from: "#FFD93D", to: "#FFBF00", badge: "⚡ Fast", difficulty: "Medium" },
  { href: "/games/treasure-trail", title: "Treasure Trail",   emoji: "🗺️", description: "Follow clues and find treasure along the way!", from: "#B57BEB", to: "#9B59D6", badge: "🏆 Adventure", difficulty: "Hard" },
];

export default function GamesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="text-center mb-8">
        <motion.div initial={{ scale: 0, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring" }} className="text-6xl mb-3">
          🎮
        </motion.div>
        <h1 className="section-title">Reading Games!</h1>
        <p className="text-gray-500 font-bold">Play games and learn to read!</p>
      </div>

      <div className="space-y-4">
        {GAMES.map((game, i) => (
          <motion.div key={game.href} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
            <Link href={game.href}>
              <div
                className="rounded-3xl p-5 text-white shadow-card hover:shadow-card-hover hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 cursor-pointer"
                style={{ background: `linear-gradient(135deg, ${game.from} 0%, ${game.to} 100%)` }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-6xl">{game.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-black">{game.title}</h3>
                      <span className="text-xs bg-white/30 px-2 py-0.5 rounded-full font-bold">{game.badge}</span>
                    </div>
                    <p className="text-sm opacity-90 font-bold">{game.description}</p>
                    <div className="mt-2">
                      <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-bold">{game.difficulty}</span>
                    </div>
                  </div>
                  <div className="text-3xl opacity-80">→</div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Best Scores */}
      <motion.div
        className="mt-6 bg-white rounded-3xl shadow-card p-5 border border-orange-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-lg font-black text-gray-800 mb-3">🏆 My Best Scores</h2>
        <div className="space-y-2">
          {GAMES.map((game) => (
            <div key={game.href} className="flex items-center gap-3">
              <span className="text-xl">{game.emoji}</span>
              <span className="font-bold text-gray-600 flex-1">{game.title}</span>
              <div className="flex gap-0.5">
                {[1, 2, 3].map((star) => <span key={star} className="text-lg">☆</span>)}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
