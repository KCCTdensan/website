const postcssVhCorrection = require("postcss-viewport-height-correction")
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")

const mode = process.env.NODE_ENV
const dev = mode === "development"

module.exports = {
  plugins: [
    postcssVhCorrection,
    autoprefixer,
    !dev && cssnano({ preset: "default" }),
  ],
}
