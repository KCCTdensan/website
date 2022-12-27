export const prerender = process.env.SSR !== "true"
export const trailingSlash = "always"

import { PLATFORM } from "$lib/env"

import { name, version } from "../../package.json"

export const load = () => ({
  pkg: { name, version },
  platform: PLATFORM,
})
