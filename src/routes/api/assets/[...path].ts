import { API_BASE, DEV } from "$lib/env"
import { validUrl } from "$lib/fmt"
import type { RequestHandler } from "@sveltejs/kit"

export const GET: RequestHandler = async ({ params }) => {
  const url = `${API_BASE}/assets/${params.path}`
  if (DEV && !validUrl(url)) return { status: 404 }
  const res = await fetch(url)
  return {
    status: res.status,
    body: new Uint8Array(await res.arrayBuffer()),
  }
}
