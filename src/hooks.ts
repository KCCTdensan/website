import { PLATFORM } from "$lib/env"
import type { GetSession } from "@sveltejs/kit"

export const getSession: GetSession = () => ({
  PLATFORM,
})
