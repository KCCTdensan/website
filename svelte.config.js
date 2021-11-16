import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"
import preprocess from "svelte-preprocess"
import adapter from "@sveltejs/adapter-static"

export default {
	extensions: [".svelte", ...mdsvexConfig.extensions],

	preprocess: [
		preprocess({
			postcss: true,
		}),
		mdsvex(mdsvexConfig),
	],

	kit: {
		target: "#svelte",
		adapter: adapter(),
	},
}
