/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'dark-bg' : 'rgb(17, 24, 39)'

      }
    },
  },
  plugins: [],
}