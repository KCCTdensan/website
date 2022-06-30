<script context="module" lang="ts">
  import Articles, { loader } from "$lib/articles.svelte"
  export const load = loader("news")
</script>

<script lang="ts">
  import type { Article } from "$lib/api"
  export let data: Article
</script>

<Articles {data} />
