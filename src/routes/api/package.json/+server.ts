import { json } from "@sveltejs/kit"
import type { RequestHandler } from "@sveltejs/kit"

import pkg from "../../../../package.json"

export const GET: RequestHandler = () => json({
  name: pkg.name,
  version: pkg.version,
})
