<script context="module" lang="ts">
  export async function load({ fetch }) { // 何故か呼ばれない
    const pkg = await fetch("/api/package.json").then(r => r.json())
    return { props: { pkg } }
  }
</script>

<script lang="ts">
  import { PLATFORM } from "$lib/_env"
  import { page } from "$app/stores"
  // import Icon from "$lib/icon.svelte"

  export let pkg

  // pathAの2個分まで対応
  // それ以上にの場合はnavLinksのロジックを変更する必要有
  const navLinks = [
    { path: "/",        name: "Top"     },
    { path: "/about/",  name: "About"   },
    { path: "/news/",   name: "News"    },
    { path: "/blog/",   name: "Blog"    },
    { path: "/dev/",    name: "Dev"     },
    { path: "/inner/",  name: "Inner"   },
    { path: "/joinus/", name: "JoinUs"  },
  ]

  $: pathA = $page.url.pathname.split("/").map(s => s + "/")
    .slice(0, -1) // trailingSlash依存
  $: breadcrumbs = pathA.map((name, i) => ({
    name,
    path: pathA.slice(0, i + 1).join(""),
  }))
</script>

<header class="header">
  <div class="headerLogo">
    <a class="logo" href="/">
      <img class="icon" src="/icon.png" alt="Logo" /><!-- SVGアニメーションにしたい -->
      <span class="text"
        ><span class="inline-block">神戸高専</span
        ><span class="inline-block">電算部</span></span
      >
    </a>
    <div class="pkgInfo">
      <span>/api/package.json</span>
      <span>{`{"name":"${pkg.name}","version":"${pkg.version}"}`}</span>
    </div>
  </div>
  <nav class="headerNav">
    <span>&gt; ls /</span>
    <ul class="navLinks">
      {#each navLinks as { path, name }}
        <li class:active={pathA.slice(0, 2).join("") === path}>
          <a sveltekit:prefetch href={path}>{name}</a>
        </li>
      {/each}
      <li>
        <a href="http://www.kobe-kosen.ac.jp" target="_blank" rel="external">KCCT</a>
      </li>
    </ul>
    <span>&gt; pwd</span>
    <ul class="breadcrumbs">
      {#each breadcrumbs as { path, name }}
        <li>
          {#if path !== undefined}
            <a href={path}>{name}</a>
          {:else}
            <span>{name}</span>
          {/if}
        </li>
      {/each}
    </ul>
    <span>&gt; echo $PLATFORM</span>
    <span>{`${PLATFORM}`}</span>
    <span>&gt; _</span>
  </nav>
</header>

<style lang="scss">
  @import "../styles/helpers.scss";
  @import "../styles/variables.scss";

  .header {
    @extend .flex-col;
    background-color: $c-headerBg;
    color: $c-headerText;
  }

  .headerLogo {
    @extend .flex-row;
    height: 4rem;
    margin: .5rem 0;
    justify-content: space-between;
    user-select: none;

    .logo {
      @extend .flex-row;
      height: 100%;
      padding: .25em;
      position: relative;
      align-items: center;

      .icon {
        height: 100%;
        margin: .5em;
      }

      .text {
        display: inline-block;
        color: $c-logoText;
        font-size: 2em;
        font-weight: 900;
      }
    }

    .pkgInfo {
      @extend .flex-col;
      height: 100%;
      margin: 0 .5rem;
      justify-content: end;
      align-items: end;
      color: $c-headerDimText;
      font-weight: bolder;
    }
  }

  .headerNav {
    @extend .flex-col;
    padding: .5em;
    background-color: $c-headerNavBg;
    color: $c-headerNavText;
    font: 1rem/1.8 $f-mono;
    cursor: text;

    * {
      flex-wrap: wrap;
    }

    a {
      color: $c-headerNavText;
    }

    .navLinks {
      @extend .flex-row;
      margin: 0;

      li:not(:last-child)::after { // 隣接セレクタだと折り返しが厳しい
        margin-right: 1em;
        content: "";
      }

      .active a {
        color: $c-headerNavStrong;
        text-decoration: underline;
      }
    }

    .breadcrumbs {
      @extend .flex-row;
      margin: 0;

      li:not(:first-child) {
        margin-left: .1em;
      }
    }
  }
</style>
