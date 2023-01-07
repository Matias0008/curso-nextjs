/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        pokemonCards: "repeat(auto-fill, minmax(180px, 1fr))",
      },
      boxShadow: {
        pokemonCardsShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
