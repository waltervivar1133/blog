module.exports = {
  purge: ['./components/ /*.{js,ts,jsx,tsx}', './pages/ /*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary' : '#E58112',
        'secondary' : '#EA9E49',
        'dark-blue': '#0c1f51',
        'light-primary': '#EEC292',
        'black-bg': '#0f182f',
        'light-bg': '#212a4a'
      },
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
