/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'lg': '1100px',
      },
      colors: {
        'iris-blue': '#002347',
        'iris-orange': '#FF5C00',
        'iris-supply-green': '#015C2D',
        'gray': '#344054',
        'light-gray': '#D0D5DD',
        'body-gray': '#475467',
      },
      fontFamily: {
        'schibsted': ['Schibsted Grotesk', 'sans-serif'],
        'proxima': ['Proxima Nova', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

