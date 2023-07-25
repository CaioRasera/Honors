/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        potta: ['Potta One'],
        poppins: ['Poppins']
      }
    },
  },
  plugins: [],
}