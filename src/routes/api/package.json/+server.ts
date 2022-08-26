import pkg from "../../../../package.json"
import type { RequestHandler } from "@sveltejs/kit"

export const GET: RequestHandler = () => ({
  body: {
    name: pkg.name,
    version: pkg.version,
  },
})
