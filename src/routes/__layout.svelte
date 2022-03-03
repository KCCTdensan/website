<script lang="ts">
  import Icon from "svelte-awesome"
  import { github, twitter } from "svelte-awesome/icons"
  // import { hamburgerrrrr } from "$lib/stores"
  // import Header from "$lib/header/Header.svelte"
  import "../app.scss"
</script>

<div class="app">
  <div class="container">
    <header class="header">
      <!-- <Header /> -->
    </header>
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
            <Icon class="icon" data={github} />
          </a>
          <a class="smallIcon" href="https://twitter.com/intent/user?user_id=444436310" target="_blank" rel="external">
            <Icon class="icon" data={twitter} />
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
  @import "../styles/colors.scss";

  .app {
    @extend .flex-row;
    min-height: 100vh;
    background-color: $c-ground;
  }

  .container {
    @extend .flex-col;
    width: 840px;//
    margin: 40px auto;//
    padding: 40px;//
    background-color: $c-bg;
    color: $c-text;
  }

  .header {}

  .main {}

  .footer {
    // justify-center

    .iconLinks {
      // w-100 justify-center
      // mx-auto mt-8 w-14 flex justify-between
    }
  }

  .smallIcon {
    // h-6 w-6 inline-block text-gray-600
    .icon {
      // w-full h-full
    }
  }

  .copyright {
    // mx-auto mb-4 mt-2 text-base font-bold
  }
</style>
