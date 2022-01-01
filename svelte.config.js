import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"
import preprocess from "svelte-preprocess"
import adapter from "@sveltejs/adapter-static"
import { isoImport } from "vite-plugin-iso-import"

export default {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  preprocess: [preprocess(), mdsvex(mdsvexConfig)],
  kit: {
    target: "#svelte",
    adapter: adapter(),
    trailingSlash: "always",
    vite: {
      plugins: [isoImport()],
    },
  },
}
