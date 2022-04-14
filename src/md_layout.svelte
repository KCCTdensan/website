<script>
  import Meta from "$lib/meta.svelte"
  import { dateFmt } from "$lib/fmt"

  export let title         = "\"hello, world\""
  export let description   = "神戸高専電算部のウェブサイト"
  export let author        = undefined
  export let noRobots      = false
  export let noTitleFormat = false
  export let date          = undefined // これはしゃーない
  export let dateUpd       = undefined // Updated

  const articleMetaVisible = author || date || dateUpd
  let authors = []
  // @ts-ignore
  if(author) authors = Array.isArray(author) ? author : author.split(/, |,/)
</script>

<Meta { ...{ title, description, author, noRobots, noTitleFormat } } />

<div class="md">

{#if articleMetaVisible}
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
      {#if authors.length > 0}
        <span>authors: [<span class="iter"
          >{#each authors as author}<span
            >"{author}"</span
          >{/each}</span
        >]</span>
      {/if}
    </span>
    <span>&rbrace;;</span>
  </div>
  <hr>
{/if}

<slot>Hello from MarkDown!</slot>

</div>

<style lang="scss">
  /* SCSS NOT WORKING */
</style>
