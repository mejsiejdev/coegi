/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Hanken Grotesk', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
