"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface AudioButtonProps {
  text?: string;
  audioUrl?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

export function AudioButton({ text, audioUrl, size = "md", label, className = "" }: AudioButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const sizes = {
    sm: "w-10 h-10 text-lg",
    md: "w-14 h-14 text-2xl",
    lg: "w-20 h-20 text-3xl",
  };

  const handlePlay = async () => {
    setIsPlaying(true);

    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.onended = () => setIsPlaying(false);
      audio.play().catch(() => setIsPlaying(false));
    } else if (text && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.7;
      utterance.pitch = 1.2;
      utterance.onend = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setIsPlaying(false), 1000);
    }
  };

  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <motion.button
        className={`audio-button ${sizes[size]}`}
        onClick={handlePlay}
        whileTap={{ scale: 0.9 }}
        animate={isPlaying ? { scale: [1, 1.1, 1] } : {}}
        transition={isPlaying ? { duration: 0.5, repeat: Infinity } : {}}
        aria-label={label || `Hear ${text}`}
      >
        {isPlaying ? "🔊" : "🔈"}
      </motion.button>
      {label && <span className="text-xs font-bold text-[#FF6B2B]">{label}</span>}
    </div>
  );
}
