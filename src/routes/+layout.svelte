<script context="module" lang="ts">
  export type State = {
    konami: boolean,
    z: boolean,
  }
</script>

<script lang="ts">
  import { browser } from "$app/env"
  import Icon from "$lib/icon.svelte"
  import Header from "$lib/header.svelte"
  import "../app.scss"

  export let state: State = {
    konami: false,
    z: false,
  }

  if(browser) {
    const cmds = [
      {
        cur: 0,
        cmd: ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"],
        f: () => {
          state.konami = true
          console.log("nyan!")
        },
      },
      {
        cur: 0,
        cmd: [...Array(30)].map(_ => "ArrowLeft"),
        f: () => {
          state.z = true
          console.log("失なわれた30年でした")
        },
      },
      {
        cur: 0,
        cmd: [...Array(30)].map(_ => "ArrowRight"),
        f: () => {
          state.z = false
        },
      },
    ]

    addEventListener("keydown", e =>
      cmds.forEach(c => {
        if (e.key === c.cmd[c.cur++]) {
          if (c.cur == c.cmd.length) c.f()
        } else {
          c.cur = 0
        }
      })
    )
  }
</script>

<div class="app" class:z={state.z}>
  <div class="container">
    <Header {state} />
    {#if state.konami}
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
          <a class="smallIcon" href="https://github.com/KCCTdensan" alt="GitHub" target="_blank" rel="external">
            <Icon type={"brands"} name={"github"} scale={1.2} />
          </a>
          <a class="smallIcon" href="https://twitter.com/intent/user?user_id=444436310" alt="Twitter" target="_blank" rel="external">
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

  .app.z {
    background: radial-gradient(at 0% 0%, $c-groundShadowZ, $c-groundZ);
    font-family: $f-correct;
    .container {
      margin-left: 0;
    }
  }

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
