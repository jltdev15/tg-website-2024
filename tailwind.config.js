/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      '2xs': '360px',
      'xs' : '480px',
      '2xl' : '1440px',
      '3xl': '1920px',
  
    },
    extend: {},
  },
  plugins: [],
}

