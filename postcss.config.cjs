module.exports = {
  plugins: [
    require("postcss-viewport-height-correction"),
    require("cssnano")({
      preset: "advanced",
      autoprefixer: { add: true },
    }),
  ],
}
