---
title: 神戸高専 電算部
description: 神戸高専電算部のウェブサイトです．
noTitleFormat: true
showMeta: false
---

<script context="module">
  export async function load({ fetch }) {
    const newsData = await fetch("/api/articles/news.json").then(r => r.json())
    return { props: { newsData } }
  }
</script>

<script>
  import Meta from "$lib/meta.svelte"
  import { dateFmt } from "$lib/fmt"

  export let newsData
</script>

<h1>
  <span class="inline-block">神戸高専</span>
  <span class="inline-block">電算部</span>
</h1>

## このサイトについて

2022年に(再度)リニューアルした，電算部の新しいウェブサイトです!  
[ソースコード(github)](https://github.com/KCCTdensan/d3bu.net)

## サイトマップ

- 電算部について -> [/about/](/about/)
- ブログ -> [/blog/](/blog/)
- 成果物 -> [/works/](/works/)
- 開発 -> [/dev/](/dev/)
- 入部の案内 -> [/joinus/](/joinus/)

## 新着情報

{#each newsData.data as article}
  <article>
    {article.date ? `${dateFmt(new Date(article.date))} - ` : ""}
    <a href={`/news/${article.slug}`}>{article.title}</a>
    <span class="inline-block">by {article.author || "KCCTdensan"}</span>
  </article>
{/each}

## 旧バージョン

- [2021年頃](/old/v1/) - Gatsby製
- [2018年頃](/old/v0/) - Riot.js製
- [それより前](/iseki/)
