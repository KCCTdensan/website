<script lang="ts">
  import "../app.scss"

  import Icon from "svelte-awesome"
  import { github, twitter } from "svelte-awesome/icons"

  import { hamburgerrrrr } from "$lib/stores"

  import Header from "$lib/header/Header.svelte"
</script>

<div class="min-h-screen flex">
  <div class="lg:my-5 container flex flex-col">
    <Header />
    <div class="flex-grow flex flex-col bg-mainBG text-mainText drop-shadow-2xl">
      <main class="px-1 md:px-4 pt-6 flex flex-col animate-fadeIn">
        <slot>Hello!</slot>
      </main>
      <footer class="mt-auto justify-between">
        <!-- left -->
        <div></div>
        <!-- center -->
        <div class="flex flex-col justify-center">
          <div class="mx-auto mt-8 w-14 flex justify-between">
            <a
              href="https://github.com/KCCTdensan"
              rel="external"
              target="_blank"
              class="h-6 w-6 inline-block text-gray-600"
            ><Icon class="w-full h-full" data={github} /></a>
            <a
              href="https://twitter.com/intent/user?user_id=444436310"
              rel="external"
              target="_blank"
              class="h-6 w-6 inline-block text-gray-600"
            ><Icon class="w-full h-full" data={twitter} /></a>
          </div>
          <small
            class="mx-auto mb-4 mt-2 text-base font-bold"
          >&copy; 1974-{ new Date().getFullYear() } KCCTdensan 神戸高専電算部</small>
        </div>
        <!-- right -->
        <div>
          <!-- 背景にabsoluteな何かを置きたい 斜めなロゴとか -->
        </div>
      </footer>
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    margin: 0 auto;
    max-width: 840px;
  }
</style>
