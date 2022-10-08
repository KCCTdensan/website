import { defineMDSveXConfig as defineConfig } from "mdsvex"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex-svelte"

function highlighter(code, lang) {
  return `<pre><code>${code}</code></pre>`
}

export default defineConfig({
  extensions: [".md", ".svx"],
  smartypants: { dashes: "oldschool" },
  layout: "./src/md_layout.svelte",
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex],
  highlight: { highlighter },
})
