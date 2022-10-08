import type { UserConfig } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"
import legacy from "@vitejs/plugin-legacy"

const dev = process.env.NODE_ENV === "development"

const config: UserConfig = {
  plugins: [
    sveltekit(),
    /*
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    */
  ],
  define: {
    ...(dev ? {
      "process.env": process.env,
    } : {
      "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`,
      "process.env.SSR": `"${process.env.SSR}"`,
    }),
  },
  server: {
    fs: {
      allow: ["."], // package.json
    },
  },
}

export default config
