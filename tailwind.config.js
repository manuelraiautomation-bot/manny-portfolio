/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#05070f",
          900: "#0a0e1a",
          850: "#0d1220",
          800: "#111729",
          700: "#1a2138",
        },
        accent: {
          blue: "#4a7dff",
          violet: "#8b5cf6",
          cyan: "#22d3ee",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #4a7dff 0%, #8b5cf6 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(74,125,255,0.35)",
      },
    },
  },
  plugins: [],
};
