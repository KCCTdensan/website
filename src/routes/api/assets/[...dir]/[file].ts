import { API_BASE } from "$lib/_env"

export async function get({ params }) {
  const res = await fetch(`${API_BASE}/assets/${params.dir}/${params.file}`)
  return {
    status: res.status,
    body: new Uint8Array(await res.arrayBuffer()),
  }
}
