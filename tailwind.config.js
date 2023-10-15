/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    './index.html',
    './src/**/*.{js,ts,tsx,jsx}',
  ],
  darkMode:'class',
  theme: {
    screens:{
      mobM:"375px",
      mobL:"425px",
      tab:"550px",
      tabM:"768px",
      tabL:"900px",
      lap:"1024px",
      lapM:"1440px",
      lapL:"1680px",
      desk:"1980px",
      deskM:"2560px"

    },
    extend: {
      colors:{
        primary:'#e8cd9e',
        secondary:'#f05179',
        textPara:'##9f9597',
        bgPrimary:'#fff',

        textParaDark:'#6e7681',
        bgPrimaryDark:'#0d1117',
        bgSecondaryDark:'#161b22'
      },
      keyframes:{
        moveY:{
          "50%": {transform : 'translateY(-1rem)'}
        }
      },
      animation:{
        'upDown':'moveY 2s linear infinite'
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:'1.5rem'
        }
      },
      fontFamily:{

      }
    },
  },
  plugins: [],
}

