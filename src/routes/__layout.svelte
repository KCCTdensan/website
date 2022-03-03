<script lang="ts">
  import Fa from "svelte-fa"
  import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
  import Header from "$lib/header/header.svelte"
  import "../app.scss"
</script>

<div class="app">
  <div class="container">
    <header class="header">
      <Header />
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
            <Fa class="fa" icon={faGithub} size={"lg"} />
          </a>
          <a class="smallIcon" href="https://twitter.com/intent/user?user_id=444436310" target="_blank" rel="external">
            <Fa class="fa" icon={faTwitter} size={"lg"} />
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

  $section-margin: 1.5rem;

  .app {
    @extend .flex-row;
    min-height: 100vh;
    background-color: $c-ground;
  }

  .container {
    @extend .flex-col;
    width: 768px;
    height: 100%;
    margin: 48px auto;
    background-color: $c-bg;
    color: $c-text;
  }

  .header {}

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
