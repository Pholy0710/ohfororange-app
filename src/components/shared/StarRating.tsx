"use client";

import { motion } from "framer-motion";

interface StarRatingProps {
  stars: number;
  maxStars?: number;
  size?: "sm" | "md" | "lg";
  animate?: boolean;
}

export function StarRating({ stars, maxStars = 3, size = "md", animate = true }: StarRatingProps) {
  const sizes = { sm: "text-lg", md: "text-2xl", lg: "text-4xl" };

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxStars }).map((_, i) => (
        <motion.span
          key={i}
          className={`${sizes[size]} select-none`}
          initial={animate ? { scale: 0, rotate: -180 } : {}}
          animate={animate ? { scale: 1, rotate: 0 } : {}}
          transition={{ delay: i * 0.15, type: "spring", stiffness: 300 }}
        >
          {i < stars ? "⭐" : "☆"}
        </motion.span>
      ))}
    </div>
  );
}
