/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      orange: colors.orange,
      amber: colors.orange,
      teal: colors.teal,
      cyan: colors.cyan,
      blue: colors.blue,
      sky: colors.sky,
    },
    extend: {},
  },
  plugins: [],
};
