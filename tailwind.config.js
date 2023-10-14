/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    './index.html',
    './src/**/*.{js,ts,tsx,jsx}',
  ],
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
        primary:'#f05179',
        seconday:'#e8cd9e',
        textPara:'##9f9597',
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

