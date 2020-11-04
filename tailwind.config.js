module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  theme: {
    lineClamp: {
      1: 1,
      2: 2,
      3: 3
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1920px",
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secundary)",
      }
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-line-clamp')
  ],
};