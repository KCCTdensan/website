import { API_BASE } from "$lib/env"
import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = async ({ params }) => {
  const res = await fetch(`${API_BASE}/assets/${params.path}`)
  return {
    status: res.status,
    body: new Uint8Array(await res.arrayBuffer()),
  }
}
