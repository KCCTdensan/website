<script context="module" lang="ts">
  export async function load({ fetch, params }) {
    const newsData = await fetch("/api/articles/news.json").then(r => r.json())
    return { props: { newsData } }
  }
</script>

<script lang="ts">
  import Meta from "$lib/meta.svelte"
  import { dateFmt } from "$lib/fmt"

  export let newsData
</script>

<Meta title="神戸高専 電算部" description="神戸高専電算部のウェブサイトです．" noTitleFormat />

<h1>
  <span class="inline-block">神戸高専</span>
  <span class="inline-block">電算部</span>
</h1>

<h2>このサイトについて</h2>

<p>
  2022年に(再度)リニューアルした，電算部の新しいウェブサイトです!<br>
  <a href="https://github.com/KCCTdensan/d3bu.net" target="_blank">ソースコード(github)</a>
</p>

<h3>旧バージョン</h3>

<ul>
  <li><a href="/old/v0/">2018年頃</a> - Riot.js製</li>
  <li><a href="/old/v1/">2021年頃</a> - Gatsby製</li>
</ul>

<h2>新着情報</h2>

{#each newsData.data as article}
  <article>
    {article.date ? `${dateFmt(new Date(article.date))} - ` : ""}
    <a href={`/news/${article.slug}`}>{article.title}</a>
    <span class="inline-block">by {article.author || "KCCTdensan"}</span>
  </article>
{/each}
