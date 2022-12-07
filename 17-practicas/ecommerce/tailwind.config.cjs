/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: {
          pale: "hsl(25, 100%, 94%)",
          DEFAULT: "hsl(26, 100%, 55%)",
        },
        customBlue: {
          gray: {
            DEFAULT: "hsl(220, 14%, 75%)",
            light: "hsl(223, 64%, 98%)",
          },
          dark: {
            DEFAULT: "hsl(220, 13%, 13%)",
            gray: "hsl(219, 9%, 45%)",
          },
        },
      },
      fontFamily: {
        kumbh: "Kumbh Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
