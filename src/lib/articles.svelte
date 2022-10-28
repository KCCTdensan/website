<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit"
  import type { ArticleApi } from "$lib/api"

  type fetch = (info: RequestInfo, init?: RequestInit) => Promise<Response>

  export async function api(fetch: fetch, entrypoint: string): Promise<ArticleApi> {
    const api = await fetch(`/api/articles/${entrypoint}.json`)
    if (!api.ok) return { data: [] }
    return api.json()
  }

  export const loader =
    (entrypoint: string): Load =>
    async ({ fetch, params }) => {
      const slug = params.slug!.slice(0, -1)
      const res = await api(fetch, entrypoint)
      const article = res.data.find(i =>
           i.slug === slug
        || i.slug === `${slug}/index`
        || !slug && i.slug === "index")
      if (article === undefined) {
        return {
          status: 404,
          error: new Error(`Could not find entry`),
        }
      }
      return article
    }
</script>

<script lang="ts">
  import MDLayout, { MDProps } from "../md_layout.svelte"
  import type { Article } from "$lib/api"

  export let data: Article
  const bodyHtml = data.body
</script>

<MDLayout { ...MDProps(data) }>
  {@html bodyHtml}
</MDLayout>
