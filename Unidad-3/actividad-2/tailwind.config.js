/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#101540',
        'bg-secondary': '#700000',
        'bg-tertiary': '#870000',
        'text-primary': '#E9F2EF',
        'text-secondary': '#ececec',
        'hover': '#7E7F9A',
      },
      spacing: {
        'xs': '5px',
        'sm': '10px',
        'md': '15px',
        'lg': '20px',
        'xl': '40px',
      },
      borderRadius: {
        'sm': '5px',
        'lg': '10px',
      },
      fontSize: {
        'sm': '14px',
        'md': '16px',
        'lg': '18px',
        'xl': '30px',
        '2xl': '40px',
      },
      maxWidth: {
        'sm': '500px',
        'md': '600px',
        'lg': '1200px',
      },
      width: {
        'icon-sm': '30px',
        'icon-md': '40px',
        'icon-lg': '50px',
      },
      height: {
        'icon-sm': '30px',
        'icon-md': '40px',
        'icon-lg': '50px',
      },

   
    },
    fontFamily: {
      'font-text': ['Lato', 'sans-serif'],
      
    }
    
},
  plugins: [],
}