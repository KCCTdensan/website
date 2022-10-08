import adapterStatic from "@sveltejs/adapter-static"
import adapterNode from "@sveltejs/adapter-node"
import preprocess from "svelte-preprocess"
import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"

const ssr = process.env.SSR === "true"
const out = "build"

export default {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  kit: {
    adapter: ssr ? adapterNode({ out }) : adapterStatic({ out }),
    appDir: "app",
    prerender: {
      onError: "continue",
    },
    trailingSlash: "always",
  },
  preprocess: [
    preprocess({ postcss: true }),
    mdsvex(mdsvexConfig),
  ],
}
