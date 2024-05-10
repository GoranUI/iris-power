/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'iris-blue': '#002347',
        'iris-orange': '#FF5C00',
        'iris-supply-green': '#015C2D',
        'gray': '#344054',
        'light-gray': '#D0D5DD'
      },
      fontFamily: {
        'schibsted': ['SchibstedGrotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

