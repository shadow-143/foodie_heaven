/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
          fontFamily: {
               'poppins': ['Poppins', 'sans'],
            },
        screens: {
          'vs': '280px',
          'sm': '340px',   
          'md': '560px', 
          'td': '950px',
          'lg': '1024px',  
        },
    },
  },
  plugins: [],
}

