<script>
  import Meta from "$lib/Meta.svelte"

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
        Post: {new Date(date).toLocaleString("ja")}
      </span>
      <span class="inline-block">
        Updated: <time datetime="{new Date(dateUpd).toISOString()}">{new Date(dateUpd).toLocaleString("ja")}</time>
      </span>
    {:else}
      <span class="inline-block">
        Post: <time datetime="{new Date(date).toISOString()}">{new Date(date).toLocaleString("ja")}</time>
      </span>
    {/if}
  </div>
  <hr class="">
{/if}

<slot>Hello from MarkDown!</slot>
