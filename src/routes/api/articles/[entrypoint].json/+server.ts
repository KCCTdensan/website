import { json, error } from "@sveltejs/kit"
import { API_BASE, DEV } from "$lib/env"
import type { RequestHandler } from "@sveltejs/kit"
import type { _ExtArticleApi, ArticleApi } from "$lib/api"

export const GET: RequestHandler = async ({ params }) => {
  const url = `${API_BASE}/api/${params.entrypoint}.json`
  const api = await fetch(url)
  if (!api.ok) throw error(api.status)

  const res: _ExtArticleApi = await api.json()
  const body: ArticleApi = {
    data: res.data.map(i => ({
      ...i,
      authors: i.author?.split(/, |,/) || [],
      body: i.body.replace(/\$assets\//g, "/api/assets/"),
      // body: i.body.replace(/\$assets\//g, `${API_BASE}/assets/`),
    })),
  }
  return json(body)
}
