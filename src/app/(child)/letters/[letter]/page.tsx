"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { getLetterData, ALPHABET_DATA } from "@/data/letters";
import { AudioButton } from "@/components/shared/AudioButton";
import { OrangeMascot } from "@/components/shared/OrangeMascot";

const ACTIVITIES = ["Learn", "Trace", "Match", "Find"];

export default function LetterPage() {
  const { letter } = useParams<{ letter: string }>();
  const letterData = getLetterData(letter);
  const [activeTab, setActiveTab] = useState("Learn");
  const [selectedWord, setSelectedWord] = useState<number | null>(null);
  const [traceComplete, setTraceComplete] = useState(false);

  if (!letterData) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">😕</div>
        <p className="text-xl font-bold text-gray-500">Letter not found</p>
        <Link href="/letters" className="btn-primary mt-4 inline-block">
          ← Back to Letters
        </Link>
      </div>
    );
  }

  const currentIdx = ALPHABET_DATA.findIndex((l) => l.letter === letterData.letter);
  const prevLetter = currentIdx > 0 ? ALPHABET_DATA[currentIdx - 1].letter : null;
  const nextLetter = currentIdx < 25 ? ALPHABET_DATA[currentIdx + 1].letter : null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Letter Navigation */}
      <div className="flex items-center justify-between mb-6">
        {prevLetter ? (
          <Link
            href={`/letters/${prevLetter.toLowerCase()}`}
            className="btn-secondary py-2 px-4 text-sm"
          >
            ← {prevLetter}
          </Link>
        ) : (
          <div />
        )}
        <Link href="/letters" className="text-sm font-bold text-gray-400 hover:text-[#FF6B2B]">
          All Letters
        </Link>
        {nextLetter ? (
          <Link
            href={`/letters/${nextLetter.toLowerCase()}`}
            className="btn-primary py-2 px-4 text-sm"
          >
            {nextLetter} →
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Main Letter Card */}
      <motion.div
        className="rounded-3xl p-8 text-center shadow-card mb-6"
        style={{ backgroundColor: letterData.bgColor }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <motion.div
          className="text-[120px] font-black leading-none mb-2"
          style={{ color: letterData.color }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {letterData.uppercase}
        </motion.div>
        <div
          className="text-6xl font-bold"
          style={{ color: letterData.color, opacity: 0.8 }}
        >
          {letterData.lowercase}
        </div>
        <div className="mt-4 flex items-center justify-center gap-4">
          <AudioButton text={`The letter ${letterData.letter}. ${letterData.phonicSound}`} label="Hear it!" size="lg" />
        </div>
        <div className="mt-3 bg-white/70 rounded-2xl p-3 inline-block">
          <p className="font-bold text-gray-700 text-lg">{letterData.phonicSound}</p>
          <p className="text-sm text-gray-500 mt-1">{letterData.funFact}</p>
        </div>
      </motion.div>

      {/* Activity Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {ACTIVITIES.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-xl font-black text-sm whitespace-nowrap transition-all
                       ${activeTab === tab
                         ? "bg-[#FF6B2B] text-white shadow-card"
                         : "bg-white text-gray-500 hover:bg-orange-50 border border-orange-100"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "Learn" && (
          <motion.div
            key="learn"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-xl font-black text-gray-800 mb-4">
              Words starting with {letterData.letter}!
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {letterData.words.map((word, i) => (
                <motion.div
                  key={word.word}
                  className="word-card flex items-center gap-4 text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedWord(selectedWord === i ? null : i)}
                >
                  <div className="text-5xl">{word.emoji}</div>
                  <div className="flex-1">
                    <div className="text-2xl font-black text-gray-800">
                      <span style={{ color: letterData.color }}>{word.word[0]}</span>
                      {word.word.slice(1)}
                    </div>
                    {selectedWord === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-sm text-gray-500 font-bold mt-1"
                      >
                        🗣️ Say it: {word.audioHint}
                      </motion.div>
                    )}
                  </div>
                  <AudioButton text={word.word} size="sm" />
                </motion.div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <OrangeMascot
                size="md"
                expression="happy"
                message={`Great job learning about ${letterData.letter}!`}
              />
            </div>
          </motion.div>
        )}

        {activeTab === "Trace" && (
          <motion.div
            key="trace"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="text-center"
          >
            <h2 className="text-xl font-black text-gray-800 mb-4">Trace the letter!</h2>
            <div
              className="bg-white rounded-3xl p-8 shadow-card border-2 border-dashed"
              style={{ borderColor: letterData.color }}
            >
              <div
                className="text-[150px] font-black text-gray-200 select-none"
                style={{ WebkitTextStroke: `3px ${letterData.color}` }}
              >
                {letterData.uppercase}
              </div>
            </div>
            <p className="text-gray-500 font-bold mt-4 text-sm">
              🖊️ On paper: trace the dotted letter with your finger or pencil!
            </p>
            {!traceComplete ? (
              <button
                className="btn-primary mt-4"
                onClick={() => setTraceComplete(true)}
              >
                I traced it! ✅
              </button>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="mt-4 p-4 bg-green-50 rounded-2xl border border-green-200"
              >
                <div className="text-4xl">🎉</div>
                <p className="font-black text-green-600 text-lg">Amazing tracing!</p>
              </motion.div>
            )}
          </motion.div>
        )}

        {activeTab === "Match" && (
          <motion.div
            key="match"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-xl font-black text-gray-800 mb-4">
              Match the letter to the picture!
            </h2>
            <MatchActivity letterData={letterData} />
          </motion.div>
        )}

        {activeTab === "Find" && (
          <motion.div
            key="find"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-xl font-black text-gray-800 mb-4">
              Find the letter {letterData.letter}!
            </h2>
            <FindActivity targetLetter={letterData.letter} color={letterData.color} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MatchActivity({ letterData }: { letterData: ReturnType<typeof getLetterData> }) {
  const [matched, setMatched] = useState<Set<number>>(new Set());

  if (!letterData) return null;

  return (
    <div className="space-y-3">
      <p className="text-gray-500 font-bold text-sm">
        Tap words that start with {letterData.letter}!
      </p>
      <div className="grid grid-cols-2 gap-3">
        {letterData.words.map((word, i) => (
          <motion.button
            key={word.word}
            className={`p-4 rounded-2xl font-black text-lg transition-all
                       ${matched.has(i)
                         ? "bg-green-100 border-2 border-green-400 text-green-700"
                         : "bg-white border-2 border-orange-100 text-gray-700 hover:border-orange-300"}`}
            onClick={() => setMatched((prev) => new Set([...prev, i]))}
            whileTap={{ scale: 0.95 }}
          >
            {word.emoji} {word.word}
            {matched.has(i) && " ✅"}
          </motion.button>
        ))}
      </div>
      {matched.size === letterData.words.length && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="p-5 bg-yellow-50 rounded-2xl text-center border border-yellow-200"
        >
          <div className="text-5xl">🌟</div>
          <p className="font-black text-yellow-600 text-xl mt-2">Perfect Match!</p>
          <p className="text-gray-500 text-sm mt-1">
            You found all the {letterData.letter} words!
          </p>
        </motion.div>
      )}
    </div>
  );
}

function FindActivity({ targetLetter, color }: { targetLetter: string; color: string }) {
  const allLetters = "SATPINBCDEGHJKLMOQUVWXYZ"
    .split("")
    .sort(() => Math.random() - 0.5)
    .slice(0, 16);
  const [found, setFound] = useState<Set<number>>(new Set());
  const targetCount = allLetters.filter((l) => l === targetLetter).length;

  return (
    <div>
      <p className="text-gray-500 font-bold text-sm mb-4">
        Find and tap all the {targetLetter} letters! 🔍
      </p>
      <div className="grid grid-cols-4 gap-3">
        {allLetters.map((l, i) => (
          <motion.button
            key={i}
            className={`aspect-square rounded-2xl text-2xl font-black transition-all
                       ${found.has(i)
                         ? "text-white scale-95"
                         : "bg-white border-2 border-orange-100 text-gray-600 hover:border-orange-300"}`}
            style={found.has(i) ? { backgroundColor: color } : {}}
            onClick={() => {
              if (l === targetLetter) {
                setFound((prev) => new Set([...prev, i]));
              }
            }}
            whileTap={{ scale: 0.9 }}
          >
            {l}
            {found.has(i) && " ✓"}
          </motion.button>
        ))}
      </div>
      <div className="mt-4 text-center">
        <p className="font-bold text-gray-600">
          Found: {found.size} / {targetCount}
        </p>
      </div>
    </div>
  );
}
