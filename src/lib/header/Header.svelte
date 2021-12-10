<script lang="ts">
  import { page } from "$app/stores"
  // import logo from "./logo.svg"
  import Logo from "./Logo.svelte"

  const navLinks = [
    { path: "/",      name: "Top"   },
    { path: "/about", name: "About" },
    { path: "/dev",   name: "Dev"   },
    //{ path: "/articles", name: "Articles" },
  ]
</script>

<header class="lg:px-3 bg-transparent">
  <!-- ここらへんニョキってしたい -->
  <div class="select-none lg:pt-1 bg-headerBG text-headerText drop-shadow-2xl">
    <div class="h-20 flex justify-between">
      <!-- ロゴ -->
      <div class="sm:mx-4">
        <Logo />
      </div>
      <!-- トップのリンク集 -->
      <nav class="hidden mx-4 sm:flex">
        <ul class="flex items-center">
          {#each navLinks as { path, name }}
            <li class="block h-full" class:navLinkActive={$page.path === path}>
              <a class="block h-full w-24 px-2 flex items-center justify-center hover:bg-red-600 text-xl font-bold"
                 sveltekit:prefetch
                 href={path}>{name}</a>
            </li>
          {/each}
          <li class="block h-full">
            <a class="block h-full w-24 px-2 flex items-center justify-center hover:bg-red-600 text-xl font-bold"
               rel="external"
               href="http://www.kobe-kosen.ac.jp">学校HP</a>
          </li>
        </ul>
      </nav>
      <nav class="flex sm:hidden">
        <button data-collapse-toggle="mobileMenu">三</button>
      </nav>
    </div>
    <!-- もばいるめにゅー -->
    <div id="mobileMenu" class="hidden bg-yellow-600">
      <ul class="flex items-center">
        {#each navLinks as { path, name }}
          <li class="" class:navLinkActive={$page.path === path}>
            <a class=""
               sveltekit:prefetch
               href={path}>{name}</a>
          </li>
        {/each}
        <li class="">
          <a class=""
             rel="external"
             href="http://www.kobe-kosen.ac.jp">学校HP</a>
        </li>
      </ul>
    </div>
  </div>
</header>

<style lang="postcss">
  .navLinkActive {
    @apply text-purple-400;
  }
  #mobileMenu .navLinkActive {
    @apply bg-red-600;
  }
</style>
