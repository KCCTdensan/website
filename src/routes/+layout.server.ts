//import type { LayoutServerLoad } from "@sveltejs/kit"
import { PLATFORM } from "$lib/env"

import { name, version } from "../../package.json"

//export const load: LayoutServerLoad = () => ({
export const load = () => ({
  pkg: { name, version },
  PLATFORM,
})
