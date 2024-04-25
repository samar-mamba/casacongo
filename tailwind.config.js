/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vert': '#1ACB6B',
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/plugin.cjs")],
}

