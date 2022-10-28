<script lang="ts">
  import type { Article } from "$lib/api"
  export let data: Article
</script>

<Articles {data} />
