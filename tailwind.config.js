module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/components/**/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5eead4',
          secondary: '#a78bfa',
          dark: '#0F172A',
          dark2: '#081630',
        },
      },
      height: {
        100: '40rem',
      },
      width: {
        150: '1050px',
      },
      spacing: {
        22: '5.4rem',
        31: '7.4rem',
      },
    },
  },
  plugins: [],
}
