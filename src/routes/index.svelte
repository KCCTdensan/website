<script context="module" lang="ts">
  export async function load({ fetch, params }) {
    const newsData = await fetch("/api/articles/news.json").then(r => r.json())
    return { props: { newsData } }
  }
</script>

<script lang="ts">
  import Meta from "$lib/meta.svelte"

  export let newsData

  function dateFmt(d: Date): string {
    return `${
      d.getFullYear()
    }/${
      `0${d.getMonth()+1}`.slice(-2)
    }/${
      `0${d.getDate()}`.slice(-2)
    }`
  }
</script>

<Meta title="神戸高専 電算部" description="神戸高専電算部のウェブサイトです．" noTitleFormat />

<h1>
  <span class="inline-block">神戸高専</span>
  <span class="inline-block">電算部</span>
</h1>

<h2>このサイトについて</h2>

<p>
  2022年に(再度)リニューアルした、電算部の新しいウェブサイトです!<br>
  <a href="https://github.com/KCCTdensan/d3bu.net" target="_blank">ソースコード(github)</a>
</p>

<h2>新着情報</h2>

<dl>
  {#each newsData.data as article}
    <dt>
      {article.date ? `${dateFmt(new Date(article.date))} - ` : ""}
      <a href={`/news/${article.slug}`}>{article.title}</a>
      <span>by {article.author || "KCCTdensan"}</span>
    </dt>
    <dd>{article.description || ""}</dd>
  {/each}
</dl>
