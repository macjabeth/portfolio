module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      screens: {
        'xs': ''
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ],
}
