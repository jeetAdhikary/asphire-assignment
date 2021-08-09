module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlue: '#10365B',
        accentBlue: '#41CFFE',
        basicBlue: '#3359B1',
        lightGreen: '#3ED461',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
