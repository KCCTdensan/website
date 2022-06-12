<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit"
  import type { ArticleApi } from "$lib/api"

  export const load: Load = async ({ fetch, params }) => {
    const res: ArticleApi = await fetch("/api/articles/docs.json").then(r => r.json())
    const article = res.data.find(i => i.slug === params.slug)
    if(article === undefined) {
      return {
        status: 404,
        error: new Error(`Could not find entry`),
      }
    }
    return { props: { data: article } }
  }
</script>

<script lang="ts">
  import MDLayout from "../../md_layout.svelte"
  import type { Article } from "$lib/api"

  export let data: Article
  const bodyHtml = data.body
</script>

<MDLayout { ...data }>
  {@html bodyHtml}
</MDLayout>
