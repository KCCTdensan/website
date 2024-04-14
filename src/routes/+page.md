---
title: 神戸高専 電算部
description: 神戸高専電算部のウェブサイトです．
noTitleFormat: true
showMeta: false
---

<script>
  import Meta from "$lib/meta.svelte"
  import { dateFmt } from "$lib/fmt"

  export let data
  const { blogData } = data
</script>

<h1>
  <span class="inline-block">神戸高専</span>
  <span class="inline-block">電算部</span>
</h1>

## このサイトについて

2022年に(再度)リニューアルした，電算部の新しいウェブサイトです!  
[ソースコード(github)](https://github.com/KCCTdensan/d3bu.net)

<details>
  <summary>実は……</summary>
  <p>技術的負債が溜まりまくっています。助けてください。</p>
</details>

## サイトマップ

- 電算部について -> [/about/](/about/)
- ブログ -> [/blog/](/blog/)
- 成果物 -> [/works/](/works/)
- 開発 -> [/dev/](/dev/)
- 入部の案内 -> [/joinus/](/joinus/)

## 新着記事

{#each blogData.data as article}
  <article>
    {article.date ? `${dateFmt(new Date(article.date))} - ` : ""}
    <a href={`/blog/${article.slug}`}>{article.title}</a>
    <span class="inline-block">by {article.author || "KCCTdensan"}</span>
  </article>
{/each}
...

## 旧バージョン

- <a href="/old/v1/" rel="external">2021年頃</a> - Gatsby製
- <a href="/old/v0/" rel="external">2018年頃</a> - Riot.js製
- [それより前](/iseki/)