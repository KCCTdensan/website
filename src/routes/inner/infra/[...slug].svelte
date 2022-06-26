<script context="module" lang="ts">
  import Article, { loader } from "$lib/articles.svelte"
  export const load = loader("infra")
</script>

<script lang="ts">
  import type { Article } from "$lib/api"
  export let data: Article
</script>

<Article {data} />
