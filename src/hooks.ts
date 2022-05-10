import { PLATFORM } from "$lib/_env"
import type { GetSession } from "@sveltejs/kit"

export const getSession: GetSession = () => ({
  PLATFORM,
})
