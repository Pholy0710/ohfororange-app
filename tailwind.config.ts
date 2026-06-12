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
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        peach: {
          50: "#fef9f5",
          100: "#fdeee3",
          200: "#fbd8c1",
          300: "#f8bc94",
          400: "#f4956a",
          500: "#ef7040",
          600: "#e05428",
          700: "#ba3f1e",
          800: "#943420",
          900: "#772e1e",
        },
        brand: {
          orange: "#FF6B2B",
          peach: "#FFA07A",
          yellow: "#FFD93D",
          sky: "#6BC5F8",
          mint: "#6BCFB5",
          purple: "#B57BEB",
          pink: "#FF8FAB",
        },
      },
      fontFamily: {
        display: ["Nunito", "system-ui", "sans-serif"],
        body: ["Nunito", "system-ui", "sans-serif"],
        reading: ["Nunito", "Comic Sans MS", "cursive"],
      },
      backgroundImage: {
        "orange-peach": "linear-gradient(135deg, #FF6B2B 0%, #FFA07A 50%, #FFD0A0 100%)",
        "peach-light": "linear-gradient(135deg, #FFA07A 0%, #FFD0A0 50%, #FFF0E0 100%)",
        "sky-mint": "linear-gradient(135deg, #6BC5F8 0%, #6BCFB5 100%)",
        "purple-pink": "linear-gradient(135deg, #B57BEB 0%, #FF8FAB 100%)",
        "card-warm": "linear-gradient(145deg, #FFF8F4 0%, #FFEEDD 100%)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 4px 20px rgba(255, 107, 43, 0.15)",
        "card-hover": "0 8px 30px rgba(255, 107, 43, 0.25)",
        soft: "0 2px 15px rgba(0, 0, 0, 0.08)",
        glow: "0 0 20px rgba(255, 107, 43, 0.4)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        sparkle: "sparkle 2s ease-in-out infinite",
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        pop: "pop 0.3s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1) rotate(0deg)" },
          "50%": { opacity: "0.7", transform: "scale(1.2) rotate(180deg)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-5deg)" },
          "75%": { transform: "rotate(5deg)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pop: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "70%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
