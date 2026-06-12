import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:    "#7C8CFF",
          purple:  "#B68DFF",
          yellow:  "#FFB84D",
          green:   "#6DDC91",
          pink:    "#FF9ECF",
          sky:     "#BFE7FF",
          cream:   "#FFF8EC",
          orange:  "#FF6B2B",
          peach:   "#FFA07A",
        },
        orange: {
          50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74",
          400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c",
          800: "#9a3412", 900: "#7c2d12",
        },
      },
      fontFamily: {
        display: ["Fredoka", "Nunito", "system-ui", "sans-serif"],
        body:    ["Nunito", "system-ui", "sans-serif"],
        reading: ["Fredoka", "Nunito", "Comic Sans MS", "cursive"],
      },
      backgroundImage: {
        "storybook":     "linear-gradient(180deg, #FFF8EC 0%, #F5F7FF 50%, #EAF7FF 100%)",
        "hero-gradient": "linear-gradient(135deg, #FF9ECF 0%, #B68DFF 50%, #7C8CFF 100%)",
        "blue-purple":   "linear-gradient(135deg, #7C8CFF 0%, #B68DFF 100%)",
        "green-blue":    "linear-gradient(90deg, #6DDC91, #7C8CFF)",
        "warm-gradient": "linear-gradient(135deg, #FF6B2B 0%, #FFB84D 100%)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "card":        "0 4px 24px rgba(124, 140, 255, 0.12)",
        "card-hover":  "0 8px 40px rgba(124, 140, 255, 0.22)",
        "soft":        "0 2px 12px rgba(124, 140, 255, 0.08)",
        "glow-blue":   "0 0 24px rgba(124, 140, 255, 0.45)",
        "glow-purple": "0 0 24px rgba(182, 141, 255, 0.45)",
        "glow-warm":   "0 0 24px rgba(255, 107, 43, 0.4)",
        "card-warm":   "0 4px 20px rgba(255, 107, 43, 0.12)",
        "card":        "0 4px 24px rgba(124, 140, 255, 0.12)",
      },
      animation: {
        float:           "float 4s ease-in-out infinite",
        "float-cloud":   "floatCloud 6s ease-in-out infinite",
        "fade-in-up":    "fadeInUp 0.5s ease both",
        sparkle:         "sparkle 2s ease-in-out infinite",
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
        "bounce-slow":   "bounce 2.5s infinite",
        "pulse-soft":    "pulseSoft 2s ease-in-out infinite",
        "slide-up":      "slideUp 0.5s ease-out",
        "fade-in":       "fadeIn 0.5s ease-out",
        pop:             "pop 0.3s ease-out",
        wiggle:          "wiggle 1s ease-in-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        floatCloud: {
          "0%, 100%": { transform: "translateX(0px) translateY(0px)" },
          "25%":      { transform: "translateX(8px) translateY(-4px)" },
          "50%":      { transform: "translateX(0px) translateY(-8px)" },
          "75%":      { transform: "translateX(-8px) translateY(-4px)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(15px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1) rotate(0deg)" },
          "50%":      { opacity: "0.7", transform: "scale(1.2) rotate(180deg)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-6px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.8" },
        },
        slideUp: {
          "0%":   { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pop: {
          "0%":   { transform: "scale(0.8)", opacity: "0" },
          "70%":  { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%":      { transform: "rotate(-5deg)" },
          "75%":      { transform: "rotate(5deg)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
