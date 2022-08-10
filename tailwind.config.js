/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      },
      colors: {
        'red-brand': '#DB2F27',
        'red-light': '#ff4633'
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
}
