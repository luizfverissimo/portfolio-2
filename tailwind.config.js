module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "pop": ['"Poppins"']
    },
    extend: {
      colors: {
        "black-theme": "#141414",
        "white-theme": "#f1f1f1",
        "pink-theme": "#FD3A69",
        "gray-theme": "#858585"
      },
      zIndex: {
        "under": -1
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'],
    extend: {},
  },
  plugins: [],
}
