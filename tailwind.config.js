/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#f42c37",
        secondary:"#f42c37",
        brandyellow:"#fdc62e",
        brandgreen:"#2dcc6f",
        blandblue:"#1376f4",
        brandwhite:"#eeeeee"
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:"2rem",
         
        }
      }
    },
  },
  plugins: [],
}