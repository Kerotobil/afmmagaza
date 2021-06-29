const { transform } = require('typescript');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

   
    extend: {
      height:{
        100:'32rem'
      },
     

      fontFamily: {
        josefin: ['Josefin Sans']

      },
      animation: {
        scroller: 'sky 180s infinite linear',
      },
      keyframes: {

        sky: {
          '0%': {
            transform: 'translateX(100%)'
          },
          '50%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          },
        },
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
