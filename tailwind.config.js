module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "pop": ['"Poppins"']
    },
    extend: {
      colors: {
        "black-theme": "#1c1c1c",
        "white-theme": "#f1f1f1",
        "pink-theme": "#FD3A69"
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'],
    extend: {},
  },
  plugins: [],
}
