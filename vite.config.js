import { sveltekit } from "@sveltejs/kit/vite"

const dev = process.env.NODE_ENV === "development"

export default {
  plugins: [sveltekit()],
  define: {
    ...(dev ? {
      "process.env": process.env,
    } : {
      "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`,
      "process.env.SSR": `"${process.env.SSR}"`,
    }),
  },
}
