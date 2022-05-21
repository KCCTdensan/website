import { API_BASE } from "$lib/_env"

export async function get({ params }) {
  const res = await fetch(`${API_BASE}/api/${params.entrypoint}.json`)

  if(!res.ok) return {
    status: res.status,
  }

  const body = await res.json()
  body.data = body.data.map(article => {
    //article.body = article.body.replace(/\$assets\//g, "/api/assets/")
    article.body = article.body.replace(/\$assets\//g, `${API_BASE}/api/assets/`)
    return article
  })
  return { body, }
}
