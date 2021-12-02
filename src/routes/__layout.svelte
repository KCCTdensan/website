<script lang="ts">
  // import "@themesberg/flowbite"
  import Header from "$lib/header/Header.svelte"
  import "../app.css"
</script>

<div class="min-h-screen container bg-gray-100 flex flex-col">
  <Header />

  <main class="flex flex-col animate-fadeIn">
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
