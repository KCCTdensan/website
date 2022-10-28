import { API_BASE } from "$lib/env"
import { validUrl } from "$lib/fmt"
import type { RequestHandler } from "@sveltejs/kit"

export const GET: RequestHandler = async ({ params }) => {
  const url = `${API_BASE}/assets/${params.path}`
  const res = await fetch(url)
  const body = new Uint8Array(await res.arrayBuffer())
  return new Response(body, { status: res.status })
}
