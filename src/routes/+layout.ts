const ssr = process.env.SSR === "true"
export const prerender = !ssr

//import type { LayoutServerLoad } from "@sveltejs/kit"
import { PLATFORM } from "$lib/env"

import { name, version } from "../../package.json"

//export const load: LayoutServerLoad = () => ({
export const load = () => ({
  pkg: { name, version },
  PLATFORM,
})
