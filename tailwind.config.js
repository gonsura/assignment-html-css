/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './src/**/*'],
  theme: {
    extend: {
      fontFamily: {
        'Pacifico': ['Pacifico', 'cursive'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      colors: {
        'primary': '#FF9C1A',
        'secondary': '#EC1B09',
        'tertiary': '#F2F5F9',
      }
    },
  },
  plugins: [],
}

