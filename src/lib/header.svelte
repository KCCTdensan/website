<script context="module" lang="ts">
  export async function load({ fetch }) { // 何故か呼ばれない
    const pkg = await fetch("/api/package.json").then(r => r.json())
    return { props: { pkg } }
  }
</script>

<script lang="ts">
  import { page } from "$app/stores"
  // import Icon from "$lib/icon.svelte"

  export let pkg

  const navLinks = [
    { path: "/",        name: "Top"   },
    { path: "/about/",  name: "About" },
    { path: "/dev/",    name: "Dev"   },
    { path: "/blog/",   name: "Blog"  },
  ]
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
    <div><!-- 何か --></div>
  </div>
  <nav class="headerNav">
    <ul class="navLinks">
      {#each navLinks as { path, name }}
        <li class:active={$page.url.pathname === path}>
          <a sveltekit:prefetch href={path}>{name}</a>
        </li>
      {/each}
      <li>
        <a href="http://www.kobe-kosen.ac.jp" target="_blank" rel="external">KCCT</a>
      </li>
    </ul>
    <span>&gt; print(pkg::info);</span>
    <span>{`"${pkg.name}@${pkg.version}"`}</span>
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
      width: 100%;
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
  }

  .headerNav {
    @extend .flex-col;
    // height: 2.5rem;
    padding: .5em;
    background-color: $c-headerNavBg;
    color: $c-headerNavText;
    font-family: ui-monospace;
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

      li:first-child::before {
        margin-right: .5em;
        content: "> enum nav_links = {";
      }
      li:not(:last-child)::after { // 隣接セレクタだと折り返しが厳しい
        margin-right: .5em;
        content: ",";
      }
      li:last-child::after {
        margin-left: .5em;
        content: "};";
      }

      .active a {
        color: $c-headerNavStrong;
      }
    }
  }
</style>
