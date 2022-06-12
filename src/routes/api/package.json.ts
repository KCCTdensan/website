import pkg from "../../../package.json"
import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = () => ({
  body: {
    name: pkg.name,
    version: pkg.version,
  },
})
