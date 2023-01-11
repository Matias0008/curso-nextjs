/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        pokemonCards: "repeat(auto-fill, minmax(150px, 1fr))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
