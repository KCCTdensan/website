import { api } from "$lib/articles.svelte"

export async function load({ fetch }) {
  const blogData = await api(fetch, "blog")
  blogData.data = blogData.data.slice(0, 8)
  return { blogData }
}
