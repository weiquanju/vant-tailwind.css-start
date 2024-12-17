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
    },
    extend: {
      colors: {
        primary: 'hsl(150, 95%, 25%)',
        'primary-20': 'hsl(150, 100%, 20%)',
        'primary-90': 'hsl(151, 100%, 90%)',
        highlight: 'hsl(25, 100%, 50%)',
        amount: '#D29611',
        'grey-10': 'hsl(0, 0%, 10%)',
        'grey-20': 'hsl(0, 0%, 20%)',
        'grey-30': 'hsl(0, 0%, 30%)',
        'grey-50': 'hsl(0, 0%, 50%)',
        'grey-60': 'hsl(0, 0%, 60%)',
        'grey-70': 'hsl(0, 0%, 70%)',
        'grey-80': 'hsl(0, 0%, 80%)',

      },
      lineHeight: {
        '5.5': '1.375rem'//22px
      },
      borderRadius: {
        '2.5': '0.625rem'//18px
      }
    },
  },
  plugins: [],
}

