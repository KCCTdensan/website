import { API_BASE } from "$lib/env"
import type { RequestHandler } from "@sveltejs/kit"
import type { _ExtArticleApi, ArticleApi } from "$lib/api"

export const get: RequestHandler = async ({ params }) => {
  const api = await fetch(`${API_BASE}/api/${params.entrypoint}.json`)
  if (!api.ok) return { status: api.status }

  const res: _ExtArticleApi = await api.json()
  const body: ArticleApi = {
    data: res.data.map((i) => ({
      ...i,
      authors: i.author?.split(/, |,/) || [],
      //body: i.body.replace(/\$assets\//g, "/api/assets/"),
      body: i.body.replace(/\$assets\//g, `${API_BASE}/assets/`),
    })),
  }
  return { body }
}
