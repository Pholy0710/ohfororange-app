"use client";

import { motion } from "framer-motion";

interface OrangeMascotProps {
  size?: "sm" | "md" | "lg" | "xl";
  expression?: "happy" | "excited" | "thinking" | "cheering";
  message?: string;
  animate?: boolean;
  className?: string;
}

const SIZES = {
  sm: "text-4xl",
  md: "text-6xl",
  lg: "text-8xl",
  xl: "text-9xl",
};

const EXPRESSIONS = {
  happy: "😊",
  excited: "🤩",
  thinking: "🤔",
  cheering: "🎉",
};

export function OrangeMascot({
  size = "md",
  expression = "happy",
  message,
  animate = true,
  className = "",
}: OrangeMascotProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <motion.div
        className={`${SIZES[size]} select-none cursor-default relative`}
        animate={
          animate
            ? {
                y: [0, -10, 0],
                rotate: [-3, 3, -3],
              }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🍊
        <motion.div
          className="absolute -top-1 -right-1 text-lg"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {EXPRESSIONS[expression]}
        </motion.div>
      </motion.div>

      {message && (
        <motion.div
          className="mascot-bubble mt-3 max-w-xs text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-orange-200 text-2xl">
            ▲
          </div>
          {message}
        </motion.div>
      )}
    </div>
  );
}
