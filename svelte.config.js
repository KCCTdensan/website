import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"
import adapterStatic from "@sveltejs/adapter-static"
import adapterNode from "@sveltejs/adapter-node"
import preprocess from "svelte-preprocess"
import { isoImport } from "vite-plugin-iso-import"

const mode = process.env.SSR
const ssr = mode === "true"

const out = "build"

export default {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  preprocess: [
    preprocess({ postcss: true }),
    mdsvex(mdsvexConfig),
  ],
  kit: {
    adapter: ssr ? adapterNode({ out }) : adapterStatic({ out }),
    prerender: {
      default: !ssr,
      onError: "continue",
    },
    trailingSlash: "always",
    vite: {
      plugins: [isoImport()],
    },
  },
}
