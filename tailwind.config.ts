import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        brand: {
          50: "#FFFFFF",
          100: "#F7F7F7",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#6B6B6B",
          600: "#525252",
          700: "#3F3F46",
          800: "#262626",
          900: "#000000",
        },
        neutral: {
          50: "#FAFAFA",
          900: "#111318",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      spacing: {
        15: "3.75rem", // if XD uses 60px, map it here
      },
      borderRadius: {
        xl2: "1rem", // match XD corner radii
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.08)",
      },
      keyframes: {
        scrollDot: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
      animation: {
        scrollDot: "scrollDot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
