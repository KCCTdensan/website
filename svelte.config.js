import adapterStatic from "@sveltejs/adapter-static"
import adapterNode from "@sveltejs/adapter-node"
import preprocess from "svelte-preprocess"
import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"
import { isoImport } from "vite-plugin-iso-import"

const out = "build"

const dev = process.env.NODE_ENV === "development"
const ssr = process.env.SSR === "true"

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
      define: {
        ...(dev ? {
          "process.env": process.env,
        } : {
          "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`,
          "process.env.SSR": `"${process.env.SSR}"`,
        }),
      },
    },
  },
}
