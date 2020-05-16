module.exports = {
  purge: ['./src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        'xs': ''
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ],
}
