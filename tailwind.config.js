module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myColor: {
          50: "#ffe7e4",
          100: "#fcbfb8",
          200: "#f5968a",
          300: "#f06c5c",
          400: "#ec432e",
          500: "#d22b14",
          600: "#a3200f",
          700: "#75160a",
          800: "#470b04",
          900: "#1d0100",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
