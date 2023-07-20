/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      blue: "#5894BF",
      yellow: "#D69F3A",
      lightgrey: "#EFEFEF",
      black: "#000000",
      white: "#FFFFFF",
    },
    fontFamily: {
      title: ["Oxygen", "sans-serif"],
      text: ["Lekton", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
