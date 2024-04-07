import { globalCss } from "@/styles/global";
import { keyframes } from "@/styles/keyframes";
import { semanticTokens, tokens } from "@/styles/tokens";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // The extension for the emitted JavaScript files
  outExtension: "js",

  // Where to look for your css declarations
  include: ["./app/routes/**/*.{ts,tsx,js,jsx,mdx}", "./app/components/**/*.{ts,tsx,js,jsx}", "./app/styles/**/*.{ts,js}"],

  // Files to exclude
  exclude: [],

  globalCss,

  // Useful for theme customization
  theme: {
    extend: {
      keyframes,
      tokens,
      semanticTokens,
    },
  },

  hash: {
    cssVar: false,
    className: true,
  },

  lightningcss: true,

  browserslist: [">= 0.25%", "not dead"],

  importMap: "@styles",

  jsxFramework: "react",

  jsxFactory: "styled",
  jsxStyleProps: "minimal",

  // The output directory for your css system
  outdir: "styled-system",
});
