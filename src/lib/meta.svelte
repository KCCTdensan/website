<script lang="ts">
  import { dateFmt } from "$lib/fmt"

  export let title:         string      = '"hello, world"'
  export let description:   string      = "神戸高専電算部のウェブサイト"
  export let authors:       string[]    = []
  export let noRobots:      boolean     = false
  export let noTitleFormat: boolean     = false
  export let date:          Date | undefined =  undefined
  export let dateUpd:       Date | undefined =  undefined
  export let showMeta:      boolean     = false

  const destTitle = title + (noTitleFormat ? "" : " :: d3bu.net")
</script>

<svelte:head>
  <title>{destTitle}</title>
  <meta name="description"  content="{description}" />
  <meta name="author"       content="{authors.join(",") || "KCCTdensan"}" />
  <meta name="keywords"     content="電算部,電子計算機部,神戸高専,KCCT,高専" />
  {#if noRobots}<meta name="robots" content="none" />{/if}
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@kcct_densan" />
  <meta property="og:image" content="https://d3bu.net/icon.png" />
  <meta property="og:title" content="{title}" />
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
      {#if authors.length}
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
    margin: .8rem 1rem;
    font: 1rem $f-mono;

    .iter > *:not(:last-child)::after {
      content: ",";
    }
  }
</style>
