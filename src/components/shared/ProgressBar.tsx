"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showPercent?: boolean;
  color?: string;
  height?: string;
  className?: string;
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showPercent = false,
  color,
  height = "h-4",
  className = "",
}: ProgressBarProps) {
  const percent = Math.min(Math.round((value / max) * 100), 100);

  return (
    <div className={`w-full ${className}`}>
      {(label || showPercent) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-sm font-bold text-gray-600">{label}</span>}
          {showPercent && <span className="text-sm font-bold text-[#FF6B2B]">{percent}%</span>}
        </div>
      )}
      <div className={`progress-bar ${height}`}>
        <motion.div
          className="progress-fill h-full"
          style={color ? { background: color } : undefined}
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
