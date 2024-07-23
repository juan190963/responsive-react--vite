/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        '17p': '17%',
        '70p': '70%',
      },

      padding: {
        '2-1-1-1': '2% 1% 1% 1%',
        '25': '100px'
      },

      width: {
        '327w': '327px',
      },
      height: {
        '600p': '600px',
        '327h': '327px'
      },

      zIndex: {
        '-1': '-1',
      },
      
    },
  },
  plugins: [],
}

