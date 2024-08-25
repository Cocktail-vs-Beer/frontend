/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Leo Rounded', 'sans-serif'],
        moon: ['Moon Get'],
        comfortaa: ['Comfortaa Light']
      },
      colors: {
        secondary: '#141228',
        primary: '#e72060'
      }
    },
  },
  plugins: [],
}

