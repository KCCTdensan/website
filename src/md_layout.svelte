<script context="module">
  /// @ts-ignore ts対応はよ
  export const MDProps = a => ({
    title: a.title,
    description: a.description,
    authors: a.authors,
    noRobots: a.noRobots,
    noTitleFormat: a.noTitleFormat,
    date: a.date,
    dateUpd: a.dateUpd,
    showMeta: a.showMeta,
  })
</script>

<script>
  import Meta from "$lib/meta.svelte"

  export let title         = "\"hello, world\""
  export let description   = "神戸高専電算部のウェブサイト"
  /// @ts-ignore クソ
  export let authors       = []
  export let noRobots      = false
  export let noTitleFormat = false
  export let date          = ""
  export let dateUpd       = ""
  export let showMeta      = (authors.length || date || dateUpd) ? true : false
</script>

<Meta { ...{
  /// @ts-ignore
  title, description, authors, noRobots, noTitleFormat,
  date: date ? new Date(date) : undefined,
  dateUpd: dateUpd ? new Date(dateUpd) : undefined,
  showMeta,
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
