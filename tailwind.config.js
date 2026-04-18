/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#130f14",
        velvet: "#261824",
        blush: "#f5d7cb",
        gold: "#d8b06f",
        cream: "#fffaf5",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(19, 15, 20, 0.18)",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        sans: ["'Manrope'", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(216, 176, 111, 0.35), transparent 42%), radial-gradient(circle at bottom right, rgba(245, 215, 203, 0.18), transparent 35%)",
      },
    },
  },
  plugins: [],
};
