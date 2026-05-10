import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: "#050505",
          mid: "#0B0B0F",
          card: "#111116",
        },
        gold: {
          DEFAULT: "#BFA46A",
          bright: "#D8C48F",
        },
        bronze: "#7A6338",
        surface: "#17171D",
        platinum: "#F4F1EA",
        pearl: "#F4F1EA",
        muted: "#A6A29A",
        emerald: "#4ADE80",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        ui: ["Inter", "Manrope", "sans-serif"],
        mono: ["JetBrains Mono", "DM Mono", "monospace"],
      },
      boxShadow: {
        gold: "0 0 44px rgba(191,164,106,0.18)",
        emerald: "0 0 24px rgba(74,222,128,0.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
