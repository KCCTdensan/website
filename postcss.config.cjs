const cssnano = require("cssnano")
const postcssVhCorrection = require("postcss-viewport-height-correction")

module.exports = {
  plugins: [
    postcssVhCorrection,
    cssnano({
      preset: "advanced",
      autoprefixer: { add: true },
    }),
  ],
}
