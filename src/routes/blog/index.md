---
title: 電算「部」log
description: 神戸高専電算部の活動日誌（ブログ）です．
noTitleFormat: true
---

<script context="module">
  export async function load({ fetch }) {
    const { data } = await fetch("/api/articles/blog.json").then(r => r.json())
    return { props: { entries: data } }
  }
</script>

<script>
  import Meta from "$lib/meta.svelte"
  import { dateFmt } from "$lib/fmt"

  export let entries
</script>

# 電算「部」log

{#each entries as article}
  <article>
    {article.date ? `${dateFmt(new Date(article.date))} - ` : ""}
    <a href={`/blog/${article.slug}`}>{article.title}</a>
    <span class="inline-block">by {article.author || "KCCTdensan"}</span>
  </article>
{/each}