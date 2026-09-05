import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Mulish",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "Segoe UI",
          "sans-serif",
        ],
        mono: ["SF Mono", "Menlo", "Consolas", "monospace"],
      },
      colors: {
        // Razorpay Blade Design System Colors
        rzp: {
          blue: {
            DEFAULT: "#3355EE",
            hover: "#2146E8",
            light: "#EEF2FF",
            dark: "#172B85",
            subtle: "#F5F7FF",
          },
          navy: {
            DEFAULT: "#0C1A30",
            dark: "#081326",
            light: "#142540",
            surface: "#101F38",
          },
          green: {
            DEFAULT: "#10B981",
            bg: "#ECFDF5",
            border: "#A7F3D0",
            dark: "#059669",
          },
          amber: {
            DEFAULT: "#F59E0B",
            bg: "#FFFBEB",
            border: "#FDE68A",
            dark: "#D97706",
          },
          red: {
            DEFAULT: "#EF4444",
            bg: "#FEF2F2",
            border: "#FECACA",
            dark: "#DC2626",
          },
        },
        surface: {
          primary: "var(--surface-primary)",
          secondary: "var(--surface-secondary)",
          tertiary: "var(--surface-tertiary)",
        },
        content: {
          primary: "var(--content-primary)",
          secondary: "var(--content-secondary)",
          tertiary: "var(--content-tertiary)",
        },
        border: {
          subtle: "var(--border-subtle)",
          DEFAULT: "var(--border-default)",
          prominent: "var(--border-prominent)",
        },
        accent: {
          DEFAULT: "#0C83FF",
          hover: "#006EE6",
          light: "#EBF5FF",
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(23, 43, 77, 0.03), 0 6px 18px -14px rgba(23, 43, 77, 0.18)",
        "card-hover": "0 2px 4px rgba(23, 43, 77, 0.05), 0 14px 32px -16px rgba(23, 43, 77, 0.24)",
        elevated: "0 20px 54px -20px rgba(23, 43, 77, 0.30)",
        "rzp-glow": "0 0 0 3px rgba(51, 85, 238, 0.12)",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "20px",
      },
      fontSize: {
        display: ["2.25rem", { lineHeight: "1.15", fontWeight: "700", letterSpacing: "-0.02em" }],
        h1: ["1.75rem", { lineHeight: "1.2", fontWeight: "700", letterSpacing: "-0.015em" }],
        h2: ["1.375rem", { lineHeight: "1.25", fontWeight: "600", letterSpacing: "-0.01em" }],
        h3: ["1.125rem", { lineHeight: "1.35", fontWeight: "600" }],
        body: ["0.9375rem", { lineHeight: "1.6", fontWeight: "400" }],
        caption: ["0.8125rem", { lineHeight: "1.5", fontWeight: "400" }],
        metadata: ["0.75rem", { lineHeight: "1.4", fontWeight: "600" }],
      },
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "fade-up": { from: { opacity: "0", transform: "translateY(8px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        "scale-in": { from: { opacity: "0", transform: "scale(0.96)" }, to: { opacity: "1", transform: "scale(1)" } },
        "slide-in-right": { from: { transform: "translateX(100%)" }, to: { transform: "translateX(0)" } },
      },
      animation: {
        "fade-in": "fade-in 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-up": "fade-up 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-in": "scale-in 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-in-right": "slide-in-right 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
