module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors:{
        primary: 'var(--color-primary)',
        primaryNavbar: 'var(--color-primaryNavbar)',

        secondary: 'var(--color-secondary)'
      },

      fontFamily:{
        josefin:['Josefin Sans']

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
