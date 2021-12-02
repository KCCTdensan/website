<script lang="ts">
  import "@themesberg/flowbite?client"
  import "../app.css"
  import Header from "$lib/header/Header.svelte"
</script>

<div class="min-h-screen flex">
  <div class="lg:my-5 container flex flex-col">
    <Header />
    <div class="flex-grow flex flex-col bg-mainBG text-mainText drop-shadow-2xl">
      <main class="px-4 pt-6 flex flex-col animate-fadeIn">
        <slot>Hello!</slot>
      </main>
      <footer class="mt-auto justify-between">
        <!-- left -->
        <div></div>
        <!-- center -->
        <div class="flex flex-col justify-center">
          <div class="mx-auto flex">
            <a rel="external" href="https://github.com/KCCTdensan">(ぎてゅぶアイコン)</a>
            <a rel="external" href="https://twitter.com/intent/user?user_id=444436310">(Twitterアイコン)</a>
          </div>
          <small class="mx-auto mt-1 mb-3 text-base font-bold">&copy; 1974-{ new Date().getFullYear() } KCCTdensan 神戸高専電算部</small>
        </div>
        <!-- right -->
        <div></div>
      </footer>
    </div>
  </div>
</div>

<style type="postcss">
  .container {
    @apply mx-auto;
    max-width: 840px;
  }
</style>
