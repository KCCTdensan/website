<script lang="ts">
  import { browser } from "$app/env"

  // let layout
  // import { layout } from "@roxi/routify?client"

  // import { create as BareStore } from "./BareStore"
  // if (!browser) {
  //   layout = BareStore()
  // }
</script>

{#if browser}<!-- SSRでエラーになる対策 -->
<!-- <span>製作中……{$layout}</span> -->
{/if}
