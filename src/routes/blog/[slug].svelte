<script context="module" lang="ts">
  import { loader } from "$lib/articles"

  export const load = loader("blog")
</script>

<script lang="ts">
  import MDLayout, { MDProps } from "../../md_layout.svelte"
  import type { Article } from "$lib/api"

  export let data: Article
  const bodyHtml = data.body
</script>

<MDLayout { ...MDProps(data) }>
  {@html bodyHtml}
</MDLayout>
