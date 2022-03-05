---
title: News
description: 電算部の情報
---

<script context="module">
  export async function load({ fetch, params }) {
    const { data } = await fetch("/api/articles/news.json").then(r => r.json())
    return { props: { entries: data } }
  }
</script>

<script>
  import Meta from "$lib/meta.svelte"
  import { dateFmt } from "$lib/fmt"

  export let entries
</script>

# 電算部の情報

## 固定記事

- [電算部の活動](activities/) : コンテスト等の出場記録など

## 新着情報

<dl>
  {#each entries as article}
    <dt>
      {article.date ? `${dateFmt(new Date(article.date))} - ` : ""}
      <a href={`/news/${article.slug}`}>{article.title}</a>
      <span>by {article.author || "KCCTdensan"}</span>
    </dt>
    <dd>{article.description || ""}</dd>
  {/each}
</dl>
