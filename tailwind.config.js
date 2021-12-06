module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#F64242",
        dark: "#000000"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
