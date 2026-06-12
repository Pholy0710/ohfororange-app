import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function getStarRating(score: number, max: number = 100): number {
  const pct = (score / max) * 100;
  if (pct >= 90) return 3;
  if (pct >= 70) return 2;
  if (pct >= 50) return 1;
  return 0;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const COLORS = {
  orange: "#FF6B2B",
  peach: "#FFA07A",
  yellow: "#FFD93D",
  sky: "#6BC5F8",
  mint: "#6BCFB5",
  purple: "#B57BEB",
  pink: "#FF8FAB",
  green: "#52C97A",
};

export const LETTER_COLORS: Record<string, string> = {
  A: "#FF6B2B", B: "#6BC5F8", C: "#FFD93D", D: "#6BCFB5",
  E: "#B57BEB", F: "#FF8FAB", G: "#52C97A", H: "#FF6B2B",
  I: "#6BC5F8", J: "#FFD93D", K: "#6BCFB5", L: "#B57BEB",
  M: "#FF8FAB", N: "#52C97A", O: "#FF6B2B", P: "#6BC5F8",
  Q: "#FFD93D", R: "#6BCFB5", S: "#B57BEB", T: "#FF8FAB",
  U: "#52C97A", V: "#FF6B2B", W: "#6BC5F8", X: "#FFD93D",
  Y: "#6BCFB5", Z: "#B57BEB",
};
