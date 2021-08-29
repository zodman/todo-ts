module.exports = {
  purge:{
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    safelist: [
      'bg-red-50',
      'bg-blue-50',
      'text-blue-400',
      'text-red-400',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
