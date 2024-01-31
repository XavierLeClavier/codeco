/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9fc5e8",
        secondary: "#ffff00",
        tertiary: "#b45f06",
        quaternary: "#001949",
        quinary: "#38761d",
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
