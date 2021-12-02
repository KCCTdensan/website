<script lang="ts">
  import { page } from "$app/stores"
  // import logo from "./logo.svg"

  const navLinks = [
    { path: "/",      name: "Top"   },
    { path: "/about", name: "About" },
  ]
</script>

<header class="select-none">
  <div class="w-11/12 md:w-4/5 lg:w-2/3 mx-auto flex justify-between">
    <a class="h-16 flex items-center" href="/">
      <img class="h-full pointer-events-none" src="/icon.png" alt="Logo"><!-- SVGアニメーションにしたい -->
      <span class="inline-block mx-2 text-xl font-black">神戸高専電子計算機部</span>
    </a>
    <nav class="hidden sm:flex">
      <ul class="flex">
        {#each navLinks as { path, name }}
          <li class="mx-2" class:navLinkActive={$page.path === path}>
            <a sveltekit:prefetch href={path}>{name}</a>
          </li>
        {/each}
        <li><a rel="external" href="http://www.kobe-kosen.ac.jp">学校HP</a></li>
      </ul>
    </nav>
    <nav class="flex sm:hidden">
      もばいるめにゅー
    </nav>
  </div>
</header>

<style lang="postcss">
  .navLinkActive {
    @apply italic;
  }
</style>
