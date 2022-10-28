import { api } from "$lib/articles.svelte"

export const load = async ({ fetch }) => ({
  entries: await api(fetch, "blog"),
})
