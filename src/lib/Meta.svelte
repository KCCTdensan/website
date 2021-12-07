<script lang="ts">
  import { page } from "$app/stores"

  export let title         : string = "\"hello, world\""
  export let description   : string = "神戸高専電算部のウェブサイト"
  export let author        : string = "KCCTdensan"
  export let noRobots      : bool   = false
  export let noTitleFormat : bool   = false

  const destTitle = title + (noTitleFormat ? "" : " <- d3bu.net")
</script>

<svelte:head>
  <title>{destTitle}</title>
  <meta name="description"  content="{description}" />
  <meta name="author"       conetnt="{author}" />
  <meta name="keywords"     content="電算部,電子計算機部,神戸高専,KCCT,高専" />
  <meta name="robots"       content="{noRobots ? "none" : "all"}" />

  <meta name="twitter:card"     content="summary" />
  <meta name="twitter:site"     content="@kcct_densan" />
  <meta name="twitter:creator"  content="@kcct_densan" />

  <meta property="og:title"       content="{destTitle}" />
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="https://d3bu.net{$page.path}" />
  <meta property="og:image"       content="https://d3bu.net/icon.png" />
  <meta property="og:description" content="{description}" />
  <meta property="og:site_name"   content="電算部.net" />
</svelte:head>
