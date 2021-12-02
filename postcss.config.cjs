const mode = process.env.NODE_ENV
const dev = mode === "development"

module.exports = {
	plugins: [
		require("tailwindcss"),
		require("postcss-viewport-height-correction"),
		require("autoprefixer"),
		!dev && require("cssnano")({ preset: "default" }),
	],
}