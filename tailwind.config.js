/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: "#D3DED3",
        purple: "#6842EF"
      }
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1060px",
    },
    fontFamily: {
      'sans': ['Robot', 'sans-serif']
    }
  },
  variants:{},
  plugins: [],
}

