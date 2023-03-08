/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'content-desktop': '1280px',
        'content-mobile': 'calc(100% - 24px)',
      },
      colors: {
        green: '#2da44e',
        white: '#ffffff',
        blue: '#0969da',
        black: '#24292f',
        border: '#d0d7de',
        bgGray: '#f6f8fa',
      }
    },
  },
  variants: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto'],
      }
    }
  },
  plugins: [],
}
