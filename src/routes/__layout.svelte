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

  export let pkg // Header用，要改修
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
    <Header {pkg} />
    {#if konami}
      <audio autoplay controls src="/nyan.ogg" />
    {/if}
    <main class="main">
      <slot>Hello!</slot>
    </main>
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
        <small class="copyright">&copy; 1974-{ new Date().getFullYear() } KCCTdensan 神戸高専電算部</small>
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

  $section-margin: 1.5rem;

  .app {
    @extend .flex-row;
    min-height: 100vh;
    background: radial-gradient(at 50% 0%, $c-groundShadow, $c-ground);
  }

  .container {
    @extend .flex-col;
    width: 768px;
    height: 100%;
    margin: 48px auto;
    border-radius: 8px;
    background-color: $c-bg;
    color: $c-text;
  }

  .main {
    margin: $section-margin;
  }

  .footer {
    @extend .flex-row;
    margin: $section-margin;
    justify-content: space-between;

    .iconLinks {
      @extend .flex-row;
      justify-content: center;
    }
  }

  .smallIcon {
    margin: .4em;
    color: $c-dimText;
  }

  .copyright {
    margin: 0 auto;
    color: $c-dimText;
    font-size: .9rem;
    font-weight: bold;
  }
</style>
