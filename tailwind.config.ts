import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: "#030712",
          mid: "#020617",
          card: "#0F172A",
        },
        gold: {
          DEFAULT: "#93C5FD",
          bright: "#C4B5FD",
        },
        bronze: "rgba(167,139,250,0.22)",
        antique: "#A78BFA",
        surface: "#1E293B",
        platinum: "#F8FAFC",
        pearl: "#F8FAFC",
        soft: "#CBD5E1",
        muted: "#94A3B8",
        "soft-muted": "#64748B",
        emerald: "#67E8F9",
      },
      fontFamily: {
        display: ["Inter", "Manrope", "sans-serif"],
        ui: ["Inter", "Manrope", "sans-serif"],
        mono: ["JetBrains Mono", "DM Mono", "monospace"],
      },
      boxShadow: {
        gold: "0 18px 50px rgba(147,197,253,0.22)",
        emerald: "0 0 36px rgba(103,232,249,0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;
