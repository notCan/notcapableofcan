const colors = require('./colors')

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
    safelist: ['justify-end', 'justify-start'],
  },
  theme: {
    fontFamily: {
      oregano: ['Oregano', 'cursive'],
    },
    colors: {
      primary: colors.primary,
      secondary: colors.secondary,
      info: colors.info,
      success: colors.success,
      warning: colors.warning,
      danger: colors.danger,
      white: colors.white,
      black: colors.black,
      gLeft: colors.gradientLeft,
      gMiddle: colors.graidentMiddle,
      gRight: colors.gradientRight,
      // custom colors
      pink: colors.pink,
      orange: colors.orange,
      green: colors.green,
      cyan: colors.cyan,
      'klein-blue': colors['klein-blue'],
      'oxford-blue': colors['oxford-blue'],
      'middle-purple': colors['middle-purple'],
      'meadow-green': colors['meadow-green'],
      aquamarine: colors.aquamarine,
      mantis: colors.mantis,
      // custom colors
    },
  },
}
