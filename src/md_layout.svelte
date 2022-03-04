<script>
  import Meta from "$lib/meta.svelte"
  import { dateFmt } from "$lib/fmt"

  export let title         = "\"hello, world\""
  export let description   = "神戸高専電算部のウェブサイト"
  export let author        = "KCCTdensan"
  export let noRobots      = false
  export let noTitleFormat = false
  export let date          = undefined // これはしゃーない
  export let dateUpd       = undefined // Updated
</script>

<Meta { ...{ title, description, author, noRobots, noTitleFormat } } />

{#if date}
  <div>
    {#if dateUpd}
      <span class="inline-block">
        Post: {dateFmt(new Date(date))}
      </span>
      <span class="inline-block">
        Updated: <time datetime="{new Date(dateUpd).toISOString()}">{dateFmt(new Date(dateUpd))}</time>
      </span>
    {:else}
      <span class="inline-block">
        Post: <time datetime="{new Date(date).toISOString()}">{dateFmt(new Date(date))}</time>
      </span>
    {/if}
    <span class="inline-block">
      Author: {author}
    </span>
  </div>
  <hr>
{/if}

<slot>Hello from MarkDown!</slot>
