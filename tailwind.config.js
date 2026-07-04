/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./classic/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'Arial', 'sans-serif'],
        'heading': ['Plus Jakarta Sans', 'Arial', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#2e8fef',
        'brand-blue-hover': '#1a72c8',
      },
    },
  },
  plugins: [],
}
