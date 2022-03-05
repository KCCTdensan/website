<script context="module" lang="ts">
  export function load(props) {
    return { props }
  }
</script>

<script lang="ts">
  import Meta from "$lib/meta.svelte"
  export let status : number  = undefined
  export let error            = undefined
</script>

<Meta title="Error_{status}" description="エラーが発生しました．" />

<h1>
<pre><code><span class="red">error:</span> {error.message}
  x | static_assert(<span class="red">status != {status}</span>);
    |               <span class="red">~~~~~~~^~~~~~</span></code></pre>
</h1>

<p>
  {#if status === 404}
    お探しのページは見つかりませんでした……ごめんなさい………
  {:else}
    エラーが発生しました．
  {/if}
</p>

<style lang="scss">
  @import "../styles/variables.scss";

  h1 pre {
    margin: 0;
    padding: 0;
    background-color: $c-bg;
    font-size: 2rem;
    line-height: 1;

    code {
      margin: 0;
      padding: 0;
      background-color: $c-bg;
    }
  }
</style>
