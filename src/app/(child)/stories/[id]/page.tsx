"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { getStory } from "@/data/stories";
import { AudioButton } from "@/components/shared/AudioButton";
import { StarRating } from "@/components/shared/StarRating";
import { OrangeMascot } from "@/components/shared/OrangeMascot";

export default function StoryPage() {
  const { id } = useParams<{ id: string }>();
  const story = getStory(id);
  const [currentPage, setCurrentPage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [highlightedWord, setHighlightedWord] = useState<string | null>(null);
  const [comprQ, setComprQ] = useState<Record<number, string>>({});

  if (!story) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">😕</div>
        <p className="text-xl font-bold text-gray-500">Story not found</p>
        <Link href="/stories" className="btn-primary mt-4 inline-block">← Back to Stories</Link>
      </div>
    );
  }

  const page = story.pages[currentPage];
  const isLastPage = currentPage === story.pages.length - 1;

  const nextPage = () => {
    if (isLastPage) {
      setIsComplete(true);
    } else {
      setCurrentPage((p) => p + 1);
      setHighlightedWord(null);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((p) => p - 1);
      setHighlightedWord(null);
    }
  };

  const speakWord = (word: string) => {
    setHighlightedWord(word);
    if ("speechSynthesis" in window) {
      const u = new SpeechSynthesisUtterance(word);
      u.rate = 0.6;
      u.pitch = 1.2;
      u.onend = () => setHighlightedWord(null);
      window.speechSynthesis.speak(u);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Navigation */}
      <div className="flex items-center gap-3 mb-4">
        <Link href="/stories" className="btn-secondary py-2 px-4 text-sm">← Stories</Link>
        <div className="flex-1 text-center">
          <h1 className="text-lg font-black text-gray-800 line-clamp-1">{story.title}</h1>
        </div>
        <div className="text-sm font-bold text-gray-400">
          {currentPage + 1}/{story.pages.length}
        </div>
      </div>

      {/* Page Progress */}
      <div className="flex gap-1 mb-4">
        {story.pages.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all ${
              i <= currentPage ? "bg-[#FF6B2B]" : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!isComplete ? (
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Story Page Card */}
            <div
              className="rounded-3xl shadow-card overflow-hidden border border-orange-100"
              style={{ backgroundColor: page.backgroundColor }}
            >
              {/* Illustration area */}
              <div className="h-48 flex items-center justify-center text-7xl">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-center"
                >
                  {page.illustration}
                </motion.div>
              </div>

              {/* Page number badge */}
              <div className="px-6 pb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#FF6B2B] text-white text-xs font-black px-2 py-0.5 rounded-full">
                    Page {page.pageNumber}
                  </span>
                  <AudioButton text={page.text} size="sm" label="Read aloud" />
                </div>

                {/* Story text with tappable words */}
                <div className="text-2xl font-black text-gray-800 leading-relaxed">
                  {page.text.split(" ").map((word, i) => {
                    const cleanWord = word.replace(/[.,!?]/g, "");
                    const isHighlight = page.highlightWords.includes(cleanWord);
                    const isActive = highlightedWord === cleanWord;
                    return (
                      <motion.span
                        key={i}
                        className={`inline-block mr-2 cursor-pointer rounded-lg px-0.5 transition-all
                                   ${isHighlight
                                     ? "text-[#FF6B2B] underline decoration-dotted hover:bg-orange-100"
                                     : "hover:bg-gray-100"}
                                   ${isActive ? "bg-yellow-200 scale-110" : ""}`}
                        onClick={() => speakWord(cleanWord)}
                        whileTap={{ scale: 0.95 }}
                      >
                        {word}
                      </motion.span>
                    );
                  })}
                </div>

                <p className="text-xs text-gray-400 font-bold mt-3">
                  💡 Tap any word to hear it!
                </p>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className="btn-secondary flex-1 py-3 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ← Prev
              </button>
              <button
                onClick={nextPage}
                className="btn-primary flex-1 py-3 text-lg"
              >
                {isLastPage ? "Finish Story! 🎉" : "Next →"}
              </button>
            </div>
          </motion.div>
        ) : (
          /* STORY COMPLETE */
          <motion.div
            key="complete"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring" }}
          >
            <div className="bg-white rounded-3xl shadow-card p-8 text-center border border-orange-100">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: 3 }}
                className="text-7xl mb-4"
              >
                🎉
              </motion.div>
              <h2 className="text-2xl font-black text-[#FF6B2B]">Story Complete!</h2>
              <p className="text-gray-600 font-bold mt-1">You read all {story.pages.length} pages!</p>
              <StarRating stars={3} size="lg" className="justify-center mt-3" />
              <OrangeMascot size="md" expression="cheering" message="Brilliant reading! You're a star!" className="mt-4" />

              {/* Comprehension Questions */}
              <div className="mt-6 text-left space-y-4">
                <h3 className="font-black text-gray-800 text-lg">Answer these questions! 🤔</h3>
                {story.comprehensionQuestions.map((q, i) => (
                  <div key={i} className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
                    <p className="font-bold text-gray-700 text-sm">{i + 1}. {q.question}</p>
                    {comprQ[i] ? (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2">
                        <div className="flex items-start gap-2">
                          <span className="text-green-500">✅</span>
                          <p className="text-sm font-bold text-green-700">{q.answer}</p>
                        </div>
                      </motion.div>
                    ) : (
                      <button
                        className="mt-2 text-xs text-[#FF6B2B] font-bold hover:underline"
                        onClick={() => setComprQ((prev) => ({ ...prev, [i]: q.answer }))}
                      >
                        Show answer →
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                className="btn-secondary flex-1 text-sm"
                onClick={() => { setCurrentPage(0); setIsComplete(false); setComprQ({}); }}
              >
                Read Again 📖
              </button>
              <Link href="/stories" className="btn-primary flex-1 text-center text-sm">
                More Stories →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
