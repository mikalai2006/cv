/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "storyblok/**/*.{vue,js}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: colors.neutral,
      lime: colors.lime,
      purple: colors.purple,
      second: colors.neutral,
      p: colors.emerald, // primary
      s: colors.slate, // second
      su: colors.green, // success
      d: colors.red, // danger
      a: colors.orange, // accent
    },
    extend: {},
  },
  plugins: [],
};
