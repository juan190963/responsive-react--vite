/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        '17p': '17%',
        '70p': '70%',
        '58': '39%',
        '59' : '33%',
        '23': '20px auto 0 0',
        // '62' : '620px auto -328px 249px;',
        '44' : '38rem',
        '51' :  '51rem',
        '53' : '58rem',
        '54' : '69rem',
        '100' : '40rem',
        '150' : '63rem',
        '97'  : '26rem'
      },

      padding: {
        '2-1-1-1': '2% 1% 1% 1%',
        '25': '100px',
        '11-5':'11px 56px 12px',
        '21' : '21px 40px;',
        '10-30' : '10px 60px',
        '15-60-14' : '15px 35px 14px'
      },

      width: {
        '327w': '327px',
        '9/10': '70%',
        '4/11': '29%',
        '2/7' : '45%',
        '97' : '31rem'
        
      },
      height: {
        '600p': '600px',
        '327h': '327px',
        '21' : '85px',
        '540' : '540px',
        '100' : '35rem',
        '600' : '50rem',
        '700' : '63rem'
      },

      zIndex: {
        '-1': '-1',
      },
      
    },
  },
  plugins: [],
}

