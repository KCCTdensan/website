<script context="module" lang="ts">
export async function load({ error, status, fetch, url }) {
  const recommends = []
  if (status === 404 && !url.searchParams.has("404"))
    await Promise.all([
      fetch(`/old/v0${url.pathname}?404`)
        .then(r => r.ok && recommends.push({
          link: `/old/v0${url.pathname}`,
          text: "旧版(2018年頃)へのリンク",
        })),
      fetch(`/old/v1${url.pathname}?404`)
        .then(r => r.ok && recommends.push({
          link: `/old/v1${url.pathname}`,
          text: "旧版(2021年頃)へのリンク",
        })),
    ])
  return { props: { error, status, recommends } }
}
</script>

<script lang="ts">
  import { page } from "$app/stores"
  import Meta from "$lib/meta.svelte"

  export let status: number = undefined
  export let error = undefined
  export let recommends: { link: string, text: string }[] = []
</script>

<Meta title="Error_{status}" description="エラーが発生しました．" />

<h1>
<pre><code><span class="red">error:</span> {error.message}
  x | static_assert(<span class="red">status != {status}</span>);
    |               <span class="red">~~~~~~~^~~~~~</span></code></pre>
</h1>

{#if status === 404}
  <p>お探しのページは見つかりませんでした……ごめんなさい………</p>
  {#if recommends.length > 0}
    <h2>もしかして :</h2>
    <ul>
      {#each recommends as { link, text }}
        <li><article><a href={link}>{text}</a></article></li>
      {/each}
    </ul>
  {/if}
{:else}
  <p>エラーが発生しました．</p>
{/if}

<style lang="scss">
  @import "../styles/variables.scss";

  h1 pre {
    margin: 0;
    padding: 0;
    background-color: $c-bg;
    font-size: 2rem;
    line-height: 1;
    white-space: pre-wrap;

    code {
      margin: 0;
      padding: 0;
      background-color: $c-bg;
    }
  }
</style>
