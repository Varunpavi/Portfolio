/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '460px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        'primary' : "#20bad1",
        'secondary' : "#191825",
        'darkprimary':"#8121d0",
        'darksecondary':"#291c3a",
        'textcolor':"#575757",
        'bgcolor':"#e1ebed"
      },
      fontFamily: {
        'caveat': ['Caveat', 'cursive']
      }
    },
  },
  plugins: [],
}
