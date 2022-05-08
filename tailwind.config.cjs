const { transpileModule } = require("typescript");

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  output: "build",
  theme: {
    fontFamily: { 'sans': ['-apple-system', 'Helvetica', 'arial', 'sans-serif'] },
    container: {
      center: true
    },
    extend: {
      colors: {
        black: 'rgba(0, 0, 0, 0.8)'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.black'),
            h1: {
              color: theme('colors.black'),
            },
            a: {
              color: theme('colors.black'),
            },
            blockquote: {
              color: theme('colors.gray.500')
            }
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'),]
};