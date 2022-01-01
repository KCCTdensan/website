<script context="module" lang="ts">
  import { API_BASE } from "$lib/_env"
  export async function load({ fetch, params }) {
    const url = `${API_BASE}/blog.json`
    const res = await fetch(url)
    if(!res.ok) return {
      status: res.status,
      error: new Error(`Could not load ${url}`),
    }
    const entries = (await res.json()).data

    return { props: { entries } }
  }
</script>

<script lang="ts">
  import Meta from "$lib/Meta.svelte"

  export let entries
</script>

<Meta title="電算「部」log" description="神戸高専電算部の活動日誌（ブログ）です．" noTitleFormat />

<h1>電算「部」log</h1>

<dl>
  {#each entries as article}
    <dt class="">
      <a href={`/blog/${article.slug}`}>{article.title}</a>
      <span class="inline-block"
      >by {article.author || "KCCTdensan"} {article.date ? `- ${new Date(article.date).toLocaleString("ja")}` : ""}</span>
    </dt>
    <dd class="">{article.description || ""}</dd>
  {/each}
</dl>
