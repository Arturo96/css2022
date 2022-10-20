/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "ui-sans-serif"],
      },
      colors: {
        danger: "#df2935",
      },
    },
  },
  plugins: [],
};
