<script lang="ts">
  import { page } from "$app/stores"
  // import Icon from "$lib/icon.svelte"
  import type { State } from "../routes/+layout.svelte"

  export let state: State

  // pathAの2個分まで対応
  // それ以上にの場合はnavLinksのロジックを変更する必要有
  const navLinks = [
    { path: "/",        name: "Top"     },
    { path: "/about/",  name: "About"   },
    { path: "/blog/",   name: "Blog"    },
    { path: "/works/",  name: "Works"   },
    { path: "/dev/",    name: "Dev"     },
    { path: "/inner/",  name: "Inner"   },
    { path: "/joinus/", name: "JoinUs"  },
  ]
  const navLinksExt = [
    { url: "http://www.kobe-kosen.ac.jp", name: "KCCT" },
    { url: "https://20s.d3bu.net", name: "20s" },
  ]

  $: pathA = $page.url.pathname.split("/").map(s => s + "/")
    .slice(0, -1) // trailingSlash依存
  $: breadcrumbs = pathA.map((name, i) => ({
    name,
    path: pathA.slice(0, i + 1).join(""),
  }))
</script>

<header class:gaming={state.konami} class:z={state.z}>
  <div class="headerLogo">
    <a class="logo" href="/">
      <img class="icon" src="/icon.png" alt="Logo" /><!-- SVGアニメーションにしたい -->
      <span class="text"
        ><span class="inline-block">神戸</span
        ><span class="inline-block">高専</span
        ><span class="inline-block">電算部</span></span
      >
    </a>
    <div class="pkgInfo">
      <span>/api/package.json</span>
      <span>{JSON.stringify($page.data.pkg)}</span>
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
      {#each navLinksExt as { url, name }}
        <li>
          <a href={url} target="_blank" rel="noreferrer">{name}</a>
        </li>
      {/each}
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
    <span>{$page.data.PLATFORM}</span>
    <span>&gt; _</span>
  </nav>
</header>

<style lang="scss">
  @import "../styles/helpers.scss";
  @import "../styles/variables.scss";

  header {
    display: flex;
    flex-direction: column;
    background-color: $c-headerBg;
    color: $c-headerText;

    &.gaming {
      @include gaming;
    }

    &.z {
      background-color: $c-headerBgZ;
    }

    @include mqDown(md) {
      border-radius: 8px 8px 0 0;
    }
  }

  .headerLogo {
    display: flex;
    height: 4rem;
    margin: .5rem 0;
    justify-content: space-between;
    user-select: none;

    @include mqUp(md) {
      height: 3.5rem;
    }
    @include mqUp(xs) {
      height: 100%;
    }

    .logo {
      display: flex;
      height: 100%;
      position: relative;
      align-items: center;

      @include mqDown(md) {
        margin-left: .25rem;
      }

      .icon {
        height: 3.5rem; // .headerLogo's height
        margin: 0 .5rem;
      }

      .text {
        display: inline-block;
        color: $c-logoText;
        font-size: 2em;
        font-weight: 900;
        line-height: 1.1;

        .z & *:first-child {
          color: $c-logoStar;
        }
      }
    }

    .pkgInfo {
      display: flex;
      height: 100%;
      margin: 0 .5rem;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      color: $c-headerDimText;
      font-weight: bolder;

      @include mqUp(md) {
        display: none;
      }
    }
  }

  .headerNav {
    display: flex;
    padding: .5em;
    flex-direction: column;
    background-color: $c-headerNavBg;
    color: $c-headerNavText;
    font: 1rem/1.8 $f-mono;
    cursor: text;

    .gaming > & * {
      @include gaming;
      color: transparent;
      background-clip: text;
    }

    .z & {
      font-family: $f-correct;
    }

    * {
      flex-wrap: wrap;
    }

    a {
      color: $c-headerNavText;
    }

    .navLinks {
      display: flex;
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
      display: flex;
      margin: 0;

      li:not(:first-child) {
        margin-left: .1em;
      }
    }
  }
</style>
