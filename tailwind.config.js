/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Hanken Grotesk', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontFamily: {
        icons: ['Material Icons', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
