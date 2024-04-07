import mdx from "@mdx-js/rollup";
import { vitePlugin as remix } from "@remix-run/dev";
import path from "node:path";
import rehypeKatex from "rehype-katex";
import remarkFrontmatter from "remark-frontmatter";
import remarkMath from "remark-math";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";
import esbuild from "esbuild";

// vite-tsconfig-paths is too late to resolve the alias
const alias = {
  "@": path.resolve("app"),
  "@styles": path.resolve("styled-system"),
} as const;

export default defineConfig({
  build: {
    cssMinify: "lightningcss",
  },
  server: {
    port: 3000,
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
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter,
        remarkMath,
      ],
      rehypePlugins: [
        rehypeKatex,
      ],
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
