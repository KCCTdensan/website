<script context="module" lang="ts">
  import type { ErrorLoad } from "@sveltejs/kit"
  export const load: ErrorLoad = ({ status, error }) => ({
    props: {
      status,
      error: error.message,
    },
  })
</script>

<script lang="ts">
  import { page } from "$app/stores"
  import { browser } from "$app/env"
  import Meta from "$lib/meta.svelte"

  export let status: number
  export let error: string

  interface Recommend {
    link: string
    text: string
  }

  async function getRecommend(rec: Recommend): Promise<Recommend> {
    return /^\/old\/v[0-1]\/old\/v[0-1]/.test($page.url.pathname)
      ? Promise.reject("not ok (recursive)")
      : fetch(rec.link).then(res => res.ok ? rec : Promise.reject("not ok"))
  }

  let recommends: Recommend[] = []

  if(browser) { // 暫定
    [
      { link: `/old/v0${$page.url.pathname}`, text: "旧版(2018年頃)へのリンク" },
      { link: `/old/v1${$page.url.pathname}`, text: "旧版(2021年頃)へのリンク" },
    ].forEach(async (rec: Recommend) => {
      try {
        // recommends = [...recommends, await getRecommend(rec)] // NOT WORKS
        recommends.push(await getRecommend(rec))
        recommends = recommends
      } catch {/* 無いのはしゃーない */}
    })
  }
</script>

<Meta title={"Error_{status}"} description={"エラーが発生しました．"} showMeta={false} />

<main class="main-normal">
  <h1><pre><code><span class="red">error:</span> {error}
  x | static_assert(<span class="red">status != {status}</span>);
    |               <span class="red">~~~~~~~^~~~~~</span></code></pre></h1>

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
</main>

<style lang="scss">
  @import "../styles/helpers.scss";
  @import "../styles/variables.scss";

  h1 pre {
    margin: 0;
    padding: 0;
    background-color: $c-bg;
    font-size: 2rem;
    line-height: 1;
    white-space: pre-wrap;

    @include mqUp(md) {
      font-size: 1.6rem;
    }

    code {
      margin: 0;
      padding: 0;
      background-color: $c-bg;
    }
  }

  .red {
    color: red;
  }
</style>
