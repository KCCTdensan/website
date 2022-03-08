import { defineMDSveXConfig as defineConfig } from "mdsvex"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex-svelte"

export default defineConfig({
  extensions: [".md", ".svx"],
  smartypants: {
    dashes: "oldschool",
  },
  layout: {
    _: "./src/md_layout.svelte",
  },
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex],
})
