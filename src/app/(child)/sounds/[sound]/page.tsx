"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { getSoundData, PHONICS_SOUNDS } from "@/data/sounds";
import { AudioButton } from "@/components/shared/AudioButton";
import { OrangeMascot } from "@/components/shared/OrangeMascot";
import { StarRating } from "@/components/shared/StarRating";

export default function SoundPage() {
  const { sound } = useParams<{ sound: string }>();
  const soundData = getSoundData(sound);
  const [activeTab, setActiveTab] = useState("Learn");
  const [gameScore, setGameScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  if (!soundData) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">😕</div>
        <p className="text-xl font-bold text-gray-500">Sound not found</p>
        <Link href="/sounds" className="btn-primary mt-4 inline-block">← Back to Sounds</Link>
      </div>
    );
  }

  const idx = PHONICS_SOUNDS.findIndex((s) => s.sound === soundData.sound);
  const prev = idx > 0 ? PHONICS_SOUNDS[idx - 1].sound : null;
  const next = idx < PHONICS_SOUNDS.length - 1 ? PHONICS_SOUNDS[idx + 1].sound : null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-6">
        {prev ? (
          <Link href={`/sounds/${prev}`} className="btn-secondary py-2 px-4 text-sm">← /{prev}/</Link>
        ) : <div />}
        <Link href="/sounds" className="text-sm font-bold text-gray-400 hover:text-[#FF6B2B]">All Sounds</Link>
        {next ? (
          <Link href={`/sounds/${next}`} className="btn-primary py-2 px-4 text-sm">/{next}/ →</Link>
        ) : <div />}
      </div>

      {/* Main Sound Display */}
      <motion.div
        className="rounded-3xl p-8 text-center shadow-card mb-6"
        style={{ backgroundColor: soundData.bgColor }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <motion.div
          className="text-[100px] font-black leading-none"
          style={{ color: soundData.color }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {soundData.letter}
        </motion.div>
        <div className="mt-2 text-2xl font-bold text-gray-600">
          /{soundData.sound}/ sound
        </div>
        <div className="mt-4 flex items-center justify-center gap-3">
          <AudioButton
            text={`The sound is ${soundData.sound}. ${soundData.sound}, ${soundData.sound}, ${soundData.sound}`}
            size="lg"
            label="Hear the sound!"
          />
        </div>

        {/* Mascot tip */}
        <div className="mt-4 flex items-center gap-3 bg-white/80 rounded-2xl p-3 text-left">
          <span className="text-3xl">🍊</span>
          <div>
            <p className="font-black text-[#FF6B2B] text-sm">OhforOrange says:</p>
            <p className="font-bold text-gray-700 text-sm">{soundData.mascotTip}</p>
            <p className="text-xs text-gray-400 mt-0.5">Mouth shape: {soundData.mouthShape}</p>
          </div>
        </div>
      </motion.div>

      {/* Activity Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {["Learn", "Words", "Sort", "Mini Game"].map((tab) => (
          <button
            key={tab}
            onClick={() => { setActiveTab(tab); setGameScore(0); setGameComplete(false); }}
            className={`px-4 py-2.5 rounded-xl font-black text-sm whitespace-nowrap transition-all
                       ${activeTab === tab
                         ? "bg-[#FF6B2B] text-white shadow-card"
                         : "bg-white text-gray-500 hover:bg-orange-50 border border-orange-100"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "Learn" && (
          <motion.div key="learn" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h2 className="text-xl font-black text-gray-800 mb-4">All about /{soundData.sound}/!</h2>
            <div className="space-y-3">
              {soundData.words.map((word, i) => (
                <motion.div
                  key={word.word}
                  className="bg-white rounded-2xl p-4 shadow-soft border border-orange-100 flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-4xl">{word.emoji}</span>
                  <div className="flex-1">
                    <div className="text-2xl font-black text-gray-800">
                      <span style={{ color: soundData.color }}>{word.word[0]}</span>
                      {word.word.slice(1)}
                    </div>
                    <div className="text-xs text-gray-400 font-bold">{word.syllables}</div>
                  </div>
                  <AudioButton text={word.word} size="sm" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "Words" && (
          <motion.div key="words" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h2 className="text-xl font-black text-gray-800 mb-4">Rhyme families!</h2>
            <div className="bg-white rounded-3xl shadow-card p-5 border border-orange-100">
              <p className="text-sm text-gray-500 font-bold mb-3">
                Tap each word to hear it:
              </p>
              <div className="flex flex-wrap gap-3">
                {soundData.rhymeFamily.map((word) => (
                  <motion.div
                    key={word}
                    className="word-card px-5 py-3 text-xl font-black"
                    style={{ color: soundData.color }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if ("speechSynthesis" in window) {
                        const u = new SpeechSynthesisUtterance(word);
                        u.rate = 0.7;
                        window.speechSynthesis.speak(u);
                      }
                    }}
                  >
                    {word}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "Sort" && (
          <motion.div key="sort" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SortActivity soundData={soundData} />
          </motion.div>
        )}

        {activeTab === "Mini Game" && (
          <motion.div key="game" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SoundMiniGame soundData={soundData} onComplete={(score) => {
              setGameScore(score);
              setGameComplete(true);
            }} />
            {gameComplete && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="mt-4 bg-yellow-50 rounded-3xl p-6 text-center border border-yellow-200"
              >
                <div className="text-5xl mb-2">🎉</div>
                <h3 className="text-2xl font-black text-yellow-600">Game Complete!</h3>
                <StarRating stars={gameScore >= 4 ? 3 : gameScore >= 2 ? 2 : 1} size="lg" />
                <p className="text-gray-600 font-bold mt-2">You found {gameScore} /{soundData.sound}/ words!</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SortActivity({ soundData }: { soundData: NonNullable<ReturnType<typeof getSoundData>> }) {
  const otherWords = [
    { word: "ball", emoji: "⚽" },
    { word: "car", emoji: "🚗" },
    { word: "dog", emoji: "🐶" },
    { word: "egg", emoji: "🥚" },
  ];
  const allItems = [...soundData.words.slice(0, 3), ...otherWords].sort(() => Math.random() - 0.5);
  const [sorted, setSorted] = useState<{ yes: string[]; no: string[] }>({ yes: [], no: [] });

  const handleSort = (word: string, isTarget: boolean, correct: boolean) => {
    setSorted((prev) => ({
      ...prev,
      [isTarget ? "yes" : "no"]: [...prev[isTarget ? "yes" : "no"], word],
    }));
  };

  const remaining = allItems.filter(
    (w) => !sorted.yes.includes(w.word) && !sorted.no.includes(w.word)
  );

  return (
    <div>
      <h3 className="text-lg font-black text-gray-800 mb-2">
        Does it start with /{soundData.sound}/?
      </h3>
      {remaining.length > 0 ? (
        <div>
          <div
            className="text-center p-8 rounded-3xl shadow-card mb-6"
            style={{ backgroundColor: soundData.bgColor }}
          >
            <div className="text-7xl">{remaining[0].emoji}</div>
            <div className="text-3xl font-black text-gray-800 mt-3">{remaining[0].word}</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button
              className="p-4 rounded-2xl bg-green-100 border-2 border-green-400 font-black text-green-700 text-lg hover:bg-green-200 transition-colors"
              onClick={() => handleSort(remaining[0].word, true, remaining[0].word[0] === soundData.sound)}
            >
              ✅ Yes, /{soundData.sound}/
            </button>
            <button
              className="p-4 rounded-2xl bg-red-100 border-2 border-red-400 font-black text-red-700 text-lg hover:bg-red-200 transition-colors"
              onClick={() => handleSort(remaining[0].word, false, remaining[0].word[0] !== soundData.sound)}
            >
              ❌ No
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center p-6 bg-yellow-50 rounded-3xl border border-yellow-200">
          <div className="text-5xl mb-2">🌟</div>
          <p className="font-black text-yellow-600 text-xl">All sorted!</p>
        </div>
      )}
    </div>
  );
}

function SoundMiniGame({
  soundData,
  onComplete,
}: {
  soundData: NonNullable<ReturnType<typeof getSoundData>>;
  onComplete: (score: number) => void;
}) {
  const allPics = [
    ...soundData.words.slice(0, 4),
    { word: "ball", emoji: "⚽" },
    { word: "car", emoji: "🚗" },
    { word: "dog", emoji: "🐶" },
    { word: "egg", emoji: "🥚" },
  ].sort(() => Math.random() - 0.5);

  const [tapped, setTapped] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);

  const handleTap = (word: string) => {
    if (tapped.has(word)) return;
    setTapped((prev) => new Set([...prev, word]));
    const correct = word[0] === soundData.sound;
    if (correct) {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore >= 4 || tapped.size >= allPics.length - 1) {
        onComplete(newScore);
      }
    }
  };

  return (
    <div>
      <div className="text-center mb-4">
        <p className="font-black text-gray-700 text-lg">
          Tap pictures that start with /{soundData.sound}/! 🎯
        </p>
        <div
          className="text-4xl font-black mt-2"
          style={{ color: soundData.color }}
        >
          {soundData.letter}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {allPics.map((pic) => {
          const isCorrect = pic.word[0] === soundData.sound;
          const wasTapped = tapped.has(pic.word);
          return (
            <motion.button
              key={pic.word}
              className={`aspect-square rounded-2xl text-4xl flex items-center justify-center
                         border-2 transition-all
                         ${wasTapped
                           ? isCorrect
                             ? "bg-green-100 border-green-400"
                             : "bg-red-100 border-red-400"
                           : "bg-white border-orange-100 hover:border-orange-300"}`}
              onClick={() => handleTap(pic.word)}
              whileTap={{ scale: 0.9 }}
            >
              {pic.emoji}
              {wasTapped && (
                <span className="absolute text-lg">
                  {isCorrect ? "✅" : "❌"}
                </span>
              )}
            </motion.button>
          );
        })}
      </div>
      <div className="mt-3 text-center font-black text-[#FF6B2B]">
        Score: {score} ⭐
      </div>
    </div>
  );
}
