/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      '3xs': '0.5625rem', //9px
      '2xs': '0.625rem', //10px
      xs: '0.6875rem', //11px
      sm: '0.75rem', // 12px
      base: '0.875rem', // 14px
      title: ['1rem', { fontWeight: '700', lineHeight: "1.5rem" }], // 16px
      lg: '1.125rem', // 18px
    },
    extend: {
      colors: {
        primary: 'hsl(150, 95%, 25%)', // #037c40;
        'primary-20': 'hsl(150, 100%, 20%)', //#006633;
        'primary-90': 'hsl(151, 100%, 90%)', //#ccffe6;
        highlight: 'hsl(25, 100%, 50%)', //#ff6a00
        amount: 'hsl(41, 85%, 45%)', //'#D29611',
        'grey-10': 'hsl(0, 0%, 10%)', //#1a1a1a;
        'grey-20': 'hsl(0, 0%, 20%)', //#333333;
        'grey-30': 'hsl(0, 0%, 30%)', //#4d4d4d;
        'grey-50': 'hsl(0, 0%, 50%)', //#808080;
        'grey-60': 'hsl(0, 0%, 60%)', //#999999;
        'grey-70': 'hsl(0, 0%, 70%)', //#b3b3b3;
        'grey-80': 'hsl(0, 0%, 80%)', //#cccccc;
        // bg light
        'bgl': 'hsl(210, 33%, 98%)', //#F7F9FB;
      },
      lineHeight: {
        '4.5': '1.125rem',//18px
        '5.5': '1.375rem',//22px
      },
      borderRadius: {
        '2.5': '0.625rem'//18px
      }
    },
  },
  plugins: [],
}

