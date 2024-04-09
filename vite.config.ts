import path from "node:path";
import mdx from "@mdx-js/rollup";
import { vitePlugin as remix } from "@remix-run/dev";
import esbuild from "esbuild";
import rehypeKatex from "rehype-katex";
import remarkFrontmatter from "remark-frontmatter";
import remarkMath from "remark-math";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";
import envOnly from "vite-env-only";

// vite-tsconfig-paths is too late to resolve the alias
const alias = {
  "@": path.resolve("app"),
  "@styles": path.resolve("styled-system"),
} as const;

export default defineConfig({
  assetsInclude: [/\/old\//],
  build: {
    cssMinify: "lightningcss",
  },
  server: {
    port: 3000,
    proxy: {
      "/api/assets": {
        target: process.env.API_BASE,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/"),
      },
    },
    warmup: {
      clientFiles: [
        "./app/entry.client.tsx",
        "./app/root.tsx",
        "./app/routes/**/*",
      ],
    },
  },
  optimizeDeps: {
    include: ["./app/routes/**/*"],
  },
  resolve: {
    alias,
  },
  plugins: [
    envOnly(),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    remix({
      serverBuildFile: "remix.js",
      buildEnd: async () => {
        await esbuild
          .build({
            alias,
            // The final file name
            outfile: "build/server/index.js",
            // Our server entry point
            entryPoints: ["server/index.ts"],
            // Dependencies that should not be bundled
            // We import the remix build from "../build/server/remix.js", so no need to bundle it again
            external: ["./build/server/*"],
            platform: "node",
            format: "esm",
            // Don't include node_modules in the bundle
            packages: "external",
            bundle: true,
            logLevel: "info",
          })
          .catch((error: unknown) => {
            console.error(error);

            process.exit(1);
          });
      },
    }),
  ],
});
