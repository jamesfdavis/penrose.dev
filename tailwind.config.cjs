const { transpileModule } = require("typescript");

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: { // https://www.canva.com/colors/color-palettes/off-the-coast

      },
    },
  },
  plugins: []
};