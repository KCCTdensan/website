---
title: 電算「部」log
description: 神戸高専電算部の活動日誌（ブログ）です．
noTitleFormat: true
---

<script>
  import Meta from "$lib/meta.svelte"
  import { dateFmt } from "$lib/fmt"

  export let data
  const { entries } = data
</script>

# 電算「部」log

{#each entries.data as article}
  <article>
    {article.date ? `${dateFmt(new Date(article.date))} - ` : ""}
    <a href={`/blog/${article.slug}`}>{article.title}</a>
    <span class="inline-block">by {article.author || "KCCTdensan"}</span>
  </article>
{/each}
