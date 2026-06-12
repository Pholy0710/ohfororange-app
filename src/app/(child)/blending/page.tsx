"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AudioButton } from "@/components/shared/AudioButton";
import { StarRating } from "@/components/shared/StarRating";
import { OrangeMascot } from "@/components/shared/OrangeMascot";

const CVC_WORDS = [
  { word: "sat", letters: ["s", "a", "t"], emoji: "🪑", meaning: "To sit down" },
  { word: "tap", letters: ["t", "a", "p"], emoji: "🚰", meaning: "Water comes out" },
  { word: "pin", letters: ["p", "i", "n"], emoji: "📌", meaning: "Holds things" },
  { word: "sit", letters: ["s", "i", "t"], emoji: "🪑", meaning: "Rest on a chair" },
  { word: "nap", letters: ["n", "a", "p"], emoji: "😴", meaning: "A short sleep" },
  { word: "tan", letters: ["t", "a", "n"], emoji: "🟤", meaning: "A light brown" },
  { word: "pan", letters: ["p", "a", "n"], emoji: "🍳", meaning: "Used for cooking" },
  { word: "tip", letters: ["t", "i", "p"], emoji: "👆", meaning: "The pointy end" },
  { word: "sip", letters: ["s", "i", "p"], emoji: "🥤", meaning: "A small drink" },
  { word: "pat", letters: ["p", "a", "t"], emoji: "🤚", meaning: "To touch gently" },
];

type BlendMode = "intro" | "blend" | "build" | "match";

export default function BlendingPage() {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [mode, setMode] = useState<BlendMode>("intro");
  const [blendStep, setBlendStep] = useState(0);
  const [builtWord, setBuiltWord] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [complete, setComplete] = useState(false);

  const word = CVC_WORDS[currentWordIdx];

  const startBlend = () => {
    setMode("blend");
    setBlendStep(0);
  };

  const nextBlendStep = () => {
    if (blendStep < word.letters.length) {
      setBlendStep((s) => s + 1);
    } else {
      setScore((s) => s + 1);
      if (currentWordIdx < CVC_WORDS.length - 1) {
        setTimeout(() => {
          setCurrentWordIdx((i) => i + 1);
          setMode("intro");
          setBlendStep(0);
          setBuiltWord([]);
        }, 1500);
      } else {
        setComplete(true);
      }
    }
  };

  const handleLetterPick = (letter: string) => {
    const newBuilt = [...builtWord, letter];
    setBuiltWord(newBuilt);
    if (newBuilt.join("") === word.word) {
      setScore((s) => s + 1);
      setTimeout(() => {
        if (currentWordIdx < CVC_WORDS.length - 1) {
          setCurrentWordIdx((i) => i + 1);
          setMode("intro");
          setBuiltWord([]);
        } else {
          setComplete(true);
        }
      }, 1200);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="text-center mb-6">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl mb-2">
          🔗
        </motion.div>
        <h1 className="section-title">Word Blending!</h1>
        <p className="text-gray-500 font-bold text-sm">
          Word {currentWordIdx + 1} of {CVC_WORDS.length}
        </p>
      </div>

      {/* Mode Selection */}
      <div className="flex gap-2 mb-6 justify-center flex-wrap">
        {(["intro", "blend", "build", "match"] as BlendMode[]).map((m) => (
          <button
            key={m}
            onClick={() => { setMode(m); setBlendStep(0); setBuiltWord([]); }}
            className={`px-4 py-2 rounded-xl font-black text-sm capitalize transition-all
                       ${mode === m
                         ? "bg-[#FF6B2B] text-white"
                         : "bg-white text-gray-500 border border-orange-100"}`}
          >
            {m === "intro" ? "📚 Learn" : m === "blend" ? "🔗 Blend" : m === "build" ? "🏗️ Build" : "🎯 Match"}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* INTRO MODE */}
        {mode === "intro" && (
          <motion.div key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="bg-white rounded-3xl shadow-card p-8 text-center border border-orange-100">
              <div className="text-8xl mb-4">{word.emoji}</div>
              <div className="text-5xl font-black text-[#FF6B2B] mb-2">{word.word}</div>
              <p className="text-gray-500 font-bold">{word.meaning}</p>

              <div className="flex justify-center gap-3 mt-6">
                {word.letters.map((letter, i) => (
                  <motion.div
                    key={i}
                    className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center
                               text-3xl font-black text-[#FF6B2B] shadow-soft"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    {letter}
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 flex justify-center gap-2">
                <AudioButton
                  text={`${word.letters.join("... ")}... ${word.word}`}
                  size="lg"
                  label="Hear blending"
                />
                <AudioButton text={word.word} size="md" label="Hear word" />
              </div>
            </div>
            <button
              className="btn-primary w-full mt-4 text-xl py-4"
              onClick={startBlend}
            >
              Start Blending! 🔗
            </button>
          </motion.div>
        )}

        {/* BLEND MODE */}
        {mode === "blend" && (
          <motion.div key="blend" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="bg-white rounded-3xl shadow-card p-8 text-center border border-orange-100">
              <h2 className="text-xl font-black text-gray-700 mb-6">
                {blendStep === 0 ? "Let's blend this word!" : blendStep === word.letters.length ? "Put it all together!" : "Keep going..."}
              </h2>

              {/* Blend Bar */}
              <div className="flex items-center justify-center gap-2 mb-6">
                {word.letters.map((letter, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <motion.div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center
                                 text-2xl font-black transition-all duration-300
                                 ${i < blendStep
                                   ? "bg-[#FF6B2B] text-white shadow-glow"
                                   : "bg-gray-100 text-gray-300"}`}
                      animate={i < blendStep ? { scale: [1, 1.15, 1] } : {}}
                    >
                      {letter}
                    </motion.div>
                    {i < word.letters.length - 1 && (
                      <div className={`text-2xl transition-all ${i < blendStep - 1 ? "text-[#FF6B2B]" : "text-gray-200"}`}>
                        +
                      </div>
                    )}
                  </div>
                ))}
                <div className="text-2xl text-gray-200">=</div>
                <motion.div
                  className={`px-5 py-3 rounded-2xl text-2xl font-black transition-all
                             ${blendStep > word.letters.length - 1
                               ? "bg-green-100 text-green-700 border-2 border-green-400"
                               : "bg-gray-100 text-gray-300"}`}
                  animate={blendStep > word.letters.length - 1 ? { scale: [1, 1.2, 1] } : {}}
                >
                  {blendStep > word.letters.length - 1 ? word.word : "???"}
                </motion.div>
              </div>

              {/* Current sound display */}
              {blendStep > 0 && blendStep <= word.letters.length && (
                <motion.div
                  className="text-4xl font-black text-[#FF6B2B] mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  key={blendStep}
                >
                  /{word.letters.slice(0, blendStep).join("")}/
                </motion.div>
              )}

              <button
                className="btn-primary w-full text-lg py-4"
                onClick={nextBlendStep}
              >
                {blendStep === 0 ? `Start with /${word.letters[0]}/!` :
                 blendStep < word.letters.length ? `Add /${word.letters[blendStep]}/!` :
                 "Blend it all! 🎉"}
              </button>

              {blendStep > word.letters.length - 1 && (
                <motion.div
                  className="mt-4 text-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <div className="text-5xl">{word.emoji}</div>
                  <p className="font-black text-green-600 text-xl mt-2">🎉 {word.word}!</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

        {/* BUILD MODE */}
        {mode === "build" && (
          <motion.div key="build" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <BuildWordActivity word={word} onComplete={() => {
              setScore((s) => s + 1);
              if (currentWordIdx < CVC_WORDS.length - 1) {
                setTimeout(() => {
                  setCurrentWordIdx((i) => i + 1);
                  setBuiltWord([]);
                }, 1000);
              } else {
                setComplete(true);
              }
            }} />
          </motion.div>
        )}

        {/* MATCH MODE */}
        {mode === "match" && (
          <motion.div key="match" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ReadMatchActivity words={CVC_WORDS.slice(0, 5)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Score */}
      <motion.div
        className="mt-6 bg-white rounded-2xl shadow-soft p-4 border border-orange-100 flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="font-black text-gray-700">Words blended: {score}</div>
        <StarRating stars={score >= 8 ? 3 : score >= 5 ? 2 : score > 0 ? 1 : 0} />
      </motion.div>

      {complete && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white rounded-3xl p-8 text-center max-w-sm w-full shadow-2xl"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-7xl mb-4">🎉</div>
            <h2 className="text-3xl font-black text-[#FF6B2B]">Amazing!</h2>
            <p className="text-gray-600 font-bold mt-2">You blended all the words!</p>
            <StarRating stars={3} size="lg" className="justify-center mt-3" />
            <OrangeMascot size="md" expression="cheering" message="You're a Blending Hero!" className="mt-4" />
            <button
              className="btn-primary w-full mt-4"
              onClick={() => {
                setCurrentWordIdx(0);
                setMode("intro");
                setScore(0);
                setComplete(false);
                setBuiltWord([]);
                setBlendStep(0);
              }}
            >
              Play Again! 🔄
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

function BuildWordActivity({ word, onComplete }: {
  word: { word: string; letters: string[]; emoji: string };
  onComplete: () => void;
}) {
  const shuffled = [...word.letters].sort(() => Math.random() - 0.5);
  const [placed, setPlaced] = useState<(string | null)[]>(new Array(word.letters.length).fill(null));
  const [available, setAvailable] = useState(shuffled);
  const [success, setSuccess] = useState(false);

  const handlePlace = (letter: string, idx: number) => {
    if (placed[idx] !== null) return;
    const newPlaced = [...placed];
    newPlaced[idx] = letter;
    setPlaced(newPlaced);
    setAvailable((prev) => {
      const i = prev.indexOf(letter);
      return [...prev.slice(0, i), ...prev.slice(i + 1)];
    });

    if (newPlaced.join("") === word.word) {
      setSuccess(true);
      setTimeout(onComplete, 1000);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-card p-6 border border-orange-100 text-center">
      <div className="text-6xl mb-3">{word.emoji}</div>
      <p className="font-black text-gray-700 text-lg mb-6">Build the word!</p>

      {/* Empty slots */}
      <div className="flex justify-center gap-3 mb-6">
        {word.letters.map((_, i) => (
          <motion.div
            key={i}
            className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center
                       text-2xl font-black transition-all
                       ${placed[i]
                         ? success ? "bg-green-100 border-green-400 text-green-700" : "bg-[#FF6B2B] border-[#FF6B2B] text-white"
                         : "border-dashed border-orange-300 bg-orange-50 text-gray-300"}`}
            animate={placed[i] ? { scale: [1, 1.2, 1] } : {}}
          >
            {placed[i] || "_"}
          </motion.div>
        ))}
      </div>

      {/* Available letters */}
      <div className="flex justify-center gap-3">
        {available.map((letter, i) => (
          <motion.button
            key={i}
            className="w-14 h-14 rounded-2xl bg-orange-100 text-[#FF6B2B] text-2xl font-black
                       hover:bg-orange-200 hover:scale-110 active:scale-95 transition-all shadow-soft"
            onClick={() => {
              const firstEmpty = placed.findIndex((p) => p === null);
              if (firstEmpty >= 0) handlePlace(letter, firstEmpty);
            }}
            whileTap={{ scale: 0.9 }}
          >
            {letter}
          </motion.button>
        ))}
      </div>

      {success && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-4">
          <p className="text-3xl">🎉</p>
          <p className="font-black text-green-600 text-xl">{word.word}! Correct!</p>
        </motion.div>
      )}

      <button
        className="mt-4 text-sm text-gray-400 font-bold hover:text-[#FF6B2B]"
        onClick={() => { setPlaced(new Array(word.letters.length).fill(null)); setAvailable(shuffled); setSuccess(false); }}
      >
        Reset ↩️
      </button>
    </div>
  );
}

function ReadMatchActivity({ words }: { words: typeof CVC_WORDS }) {
  const [matched, setMatched] = useState<Record<string, boolean>>({});

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-black text-gray-800 mb-4">Read and Match!</h2>
      <p className="text-sm font-bold text-gray-500">Match each word to its picture:</p>
      <div className="grid grid-cols-1 gap-3">
        {words.map((word) => (
          <motion.div
            key={word.word}
            className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer
                       ${matched[word.word]
                         ? "bg-green-50 border-green-400"
                         : "bg-white border-orange-100 hover:border-orange-300"}`}
            onClick={() => setMatched((prev) => ({ ...prev, [word.word]: true }))}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-4xl">{word.emoji}</div>
            <div className="text-2xl font-black text-[#FF6B2B]">{word.word}</div>
            <div className="ml-auto text-sm font-bold text-gray-400">{word.meaning}</div>
            {matched[word.word] && <span className="text-green-500 text-xl">✅</span>}
          </motion.div>
        ))}
      </div>
      {Object.keys(matched).length === words.length && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-yellow-50 rounded-2xl p-4 text-center border border-yellow-200"
        >
          <p className="text-3xl">🌟</p>
          <p className="font-black text-yellow-600 text-xl">All matched! Amazing!</p>
        </motion.div>
      )}
    </div>
  );
}
