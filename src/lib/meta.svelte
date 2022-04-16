<script lang="ts">
  import { page } from "$app/stores"
  import { dateFmt } from "$lib/fmt"

  export let title         : string   = "\"hello, world\""
  export let description   : string   = "神戸高専電算部のウェブサイト"
  export let author        : string   = ""
  export let noRobots      : boolean  = false
  export let noTitleFormat : boolean  = false
  export let date          : Date     = undefined
  export let dateUpd       : Date     = undefined
  export let showMeta      : boolean  = false

  const destTitle = title + (noTitleFormat ? "" : " :: d3bu.net")
  const authors = author.split(/, |,/)
</script>

<svelte:head>
  <title>{destTitle}</title>
  <meta name="description"  content="{description}" />
  <meta name="author"       content="{author || "KCCTdensan"}" />
  <meta name="keywords"     content="電算部,電子計算機部,神戸高専,KCCT,高専" />
  <meta name="robots"       content="{noRobots ? "none" : "all"}" />

  <meta name="twitter:card"     content="summary" />
  <meta name="twitter:site"     content="@kcct_densan" />
  <meta name="twitter:creator"  content="@kcct_densan" />

  <meta property="og:title"       content="{destTitle}" />
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="https://d3bu.net{$page.url.pathname}" />
  <meta property="og:image"       content="https://d3bu.net/icon.png" />
  <meta property="og:description" content="{description}" />
  <meta property="og:site_name"   content="電算部.net" />
</svelte:head>

{#if showMeta}
  <div class="meta">
    <span>meta = &lbrace;</span>
    <span class="iter">
      {#if date && dateUpd}
        <span>post: "{dateFmt(new Date(date))}"</span>
        <span>updated: "<time datetime={
          new Date(dateUpd).toISOString()
        }>{dateFmt(new Date(dateUpd))}</time>"</span>
      {:else if date}
        <span>post: "<time datetime={
          new Date(date).toISOString()
        }>{dateFmt(new Date(date))}</time>"</span>
      {:else if dateUpd}
        <span>updated: "<time datetime={
          new Date(dateUpd).toISOString()
        }>{dateFmt(new Date(dateUpd))}</time>"</span>
      {/if}
      {#if author}
        <span>authors: [<span class="iter"
          >{#each authors as author}<span
            >"{author}"</span
          >{/each}</span
        >]</span>
      {/if}
    </span>
    <span>&rbrace;;</span>
  </div>
{/if}

<style lang="scss">
  @import "../styles/helpers.scss";
  @import "../styles/variables.scss";

  .meta {
    margin: 1rem;
    font: 1rem $f-mono;

    .iter > *:not(:last-child)::after {
      content: ",";
    }
  }
</style>
