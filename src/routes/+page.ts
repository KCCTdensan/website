import article from "$lib/articles"

export async function load({ fetch }) {
  const res = await article(fetch, "blog")
  const blogData = {
    ...res,
    data: res.data.slice(0, 8),
  }
  return { blogData }
}
