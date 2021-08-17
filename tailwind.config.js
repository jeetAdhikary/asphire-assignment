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
      boxShadow: {
        card: '0 2px 12px 0 rgba(0, 0, 0, 0.14)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
