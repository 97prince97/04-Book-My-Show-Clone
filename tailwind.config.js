module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navBarColor: {
          50: "#edf1fc",
          100: "#d1d6e2",
          200: "#b4bbca",
          300: "#97a0b4",
          400: "#79849e",
          500: "#606b85",
          600: "#4b5368",
          700: "#353b4b",
          800: "#1f242f",
          900: "#080c16",
        },

        signInColor: {
          50: "#ffe3eb",
          100: "#ffb3c2",
          200: "#fb8399",
          300: "#f95370",
          400: "#f62448",
          500: "#dc0d2f",
          600: "#ac0624",
          700: "#7c031a",
          800: "#4c000e",
          900: "#1f0003",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
