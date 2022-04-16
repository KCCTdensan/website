<script context="module" lang="ts">
  // Header用
  export async function load({ fetch }) {
    const pkg = await fetch("/api/package.json").then(r => r.json())
    return { props: { pkg } }
  }
  //
</script>

<script lang="ts">
  import { browser } from "$app/env"
  import Icon from "$lib/icon.svelte"
  import Header from "$lib/header.svelte"
  import "../app.scss"

  export let pkg: object // Header用，要改修
  let konami = false

  // Konami Code
  if(browser) {
    const command = [
      "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a",
    ]
    let cur = 0
    addEventListener("keydown", e => {
      if(e.key == command[cur++]) {
        if(cur == command.length) {
          konami = true
          console.log("!!")
        }
      } else {
        cur = 0
      }
    })
  }
</script>

<div class="app">
  <div class="container">
    <Header {pkg} gaming={konami} />
    {#if konami}
      <audio autoplay controls src="/nyan.ogg" class="play" />
    {/if}
    <div>
      <slot>Hello!</slot>
    </div>
    <footer class="footer">
      <!-- left -->
      <div></div>
      <!-- center -->
      <div class="flex-col">
        <div class="iconLinks">
          <a class="smallIcon" href="https://github.com/KCCTdensan" target="_blank" rel="external">
            <Icon type={"brands"} name={"github"} scale={1.2} />
          </a>
          <a class="smallIcon" href="https://twitter.com/intent/user?user_id=444436310" target="_blank" rel="external">
            <Icon type={"brands"} name={"twitter"} scale={1.2} />
          </a>
        </div>
        <small class="copyright">
          <span class="inline-block">&copy; 1974-{new Date().getFullYear()}</span>
          <span class="inline-block">KCCTdensan</span>
          <span class="inline-block">神戸高専電算部</span>
        </small>
      </div>
      <!-- right -->
      <div>
        <!-- 背景にabsoluteな何かを置きたい 斜めなロゴとか -->
      </div>
    </footer>
  </div>
</div>

<style lang="scss">
  @import "../styles/helpers.scss";
  @import "../styles/variables.scss";

  .app {
    display: flex;
    min-height: 100vh;
    background: radial-gradient(at 50% 0%, $c-groundShadow, $c-ground);
  }

  .container {
    display: flex;
    width: bpVal(md);
    height: 100%;
    margin: 48px auto;
    flex-direction: column;
    border-radius: 8px;
    background-color: $c-bg;
    color: $c-text;

    @include mqUp(md) {
      width: 100%;
      min-height: 100vh;
      margin: 0;
      border-radius: 0;
    }
  }

  .play {
    width: 100%;
  }

  .footer {
    display: flex;
    position: relative;
    margin: $l-section-margin;
    justify-content: space-between;

    @include mqUp(md) {
      margin-top: auto;
    }

    .iconLinks {
      display: flex;
      justify-content: center;
    }
  }

  .smallIcon {
    margin: .4em;
    color: $c-dimText;
  }

  .copyright {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    color: $c-dimText;
    flex-wrap: wrap;
    font-size: .9rem;
    font-weight: bold;

    & > * {
      margin: 0 .25rem;
    }
  }
</style>
