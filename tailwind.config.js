/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fff2cc",
        secondary: "#a4be49",
        tertiary: "#743a00",
        quaternary: "#ce7e00",
        quinary: "#2f1801",
      },
      fontFamily: {
        sans: ['Patrick Hand', 'sans-serif'],
      },
      fontSize :{
        'h1': '2.5rem',
        'h2': '2rem',
      }
    }
  },
  plugins: [],
};
