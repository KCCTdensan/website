<script>
  import Meta from "$lib/meta.svelte"

  export let title         = "\"hello, world\""
  export let description   = "神戸高専電算部のウェブサイト"
  export let author        = undefined
  export let noRobots      = false
  export let noTitleFormat = false
  export let date          = undefined // これはしゃーない
  export let dateUpd       = undefined // Updated
  export let showMeta      = author || date || dateUpd
</script>

<Meta { ...{
  title, description, author, noRobots, noTitleFormat,
  date, dateUpd, showMeta,
} } />

{#if showMeta}
  <hr />
{/if}

<main class="main-normal">
  <slot>Hello from MarkDown!</slot>
</main>

<style lang="scss">
  /* SCSS DOES NOT WORK, ONLY CSS */
</style>
