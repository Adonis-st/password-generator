/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        very_dark_gray: "#18171F",
        dark_gray: "#24232C",
        light_gray: "#817D92",
        almost_white: "#E6E5EA",
        neon_green: "#A4FFAF",
        banana: "#F8CD65",
        peach: "#FB7C58",
        danger: "#F64A4A"
      }
    },
  },
  plugins: [],
}
