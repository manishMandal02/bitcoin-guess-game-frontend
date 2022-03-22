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
      spacing: {
        30: '7.3rem',
      },
    },
  },
  plugins: [],
}
