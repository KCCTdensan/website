import preprocess from "svelte-preprocess"
import adapter from "@sveltejs/adapter-static"

export default {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
	kit: {
		target: "#svelte",
		adapter: adapter(),
	},
}
