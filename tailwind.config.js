/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
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
        light: {
  bg: "#dbe1ea",
  surface: "#f3f5f8",
  surfaceMuted: "#e7ebf0",
  border: "#c3ccd9",
  text: "#131a2c",
  muted: "#4b5468",
},
        accent: {
          teal: "#14b8a6",
          tealDeep: "#0d9488",
          tealLight: "#2dd4bf",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #0d9488 0%, #2dd4bf 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(20,184,166,0.35)",
      },
    },
  },
  plugins: [],
};
