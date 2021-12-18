<script lang="ts">
  import Icon from "svelte-awesome"
  import { bars } from "svelte-awesome/icons"

  import { hamburgerrrrr } from "$lib/stores"
  import { page } from "$app/stores"

  import Logo from "./Logo.svelte"

  const navLinks = [
    { path: "/",      name: "Top"   },
    { path: "/about", name: "About" },
    { path: "/dev",   name: "Dev"   },
    //{ path: "/blog", name: "Blog" },
  ]
</script>

<header class="lg:px-3 bg-transparent">
  <!-- ここらへんニョキってしたい -->
  <div class="select-none lg:pt-1 bg-headerBG text-headerText drop-shadow-2xl">
    <div class="h-20 px-2 flex justify-between">
      <!-- ロゴ -->
      <div class="h-20 sm:mx-4">
        <Logo url="/" />
      </div>
      <!-- トップのリンク集 -->
      <nav class="mx-4 hidden md:flex">
        <ul class="flex items-center">
          {#each navLinks as { path, name }}
            <li class="block h-full" class:navLinkActive={$page.path === path}>
              <a class="block h-full w-24 px-2 flex items-center justify-center hover:bg-red-600 text-white text-xl font-bold"
                 sveltekit:prefetch
                 href={path}>{name}</a>
            </li>
          {/each}
          <li class="block h-full">
            <a class="block h-full w-24 px-2 flex items-center justify-center hover:bg-red-600 text-white text-xl font-bold"
               rel="external"
               target="_blank"
               href="http://www.kobe-kosen.ac.jp">学校HP</a>
          </li>
        </ul>
      </nav>
      <nav class="flex md:hidden">
        <!-- <button class="w-16 px-3" data-collapse-toggle="sideMenu"> -->
        <button
          id="theMenuButton"
          class="w-16 px-3"
          class:hamburgerrrrr
          on:click={() => hamburgerrrrr.update(d => !d)}
        >
          <Icon class="w-full h-full" data={bars} />
        </button>
      </nav>
    </div>
    <!-- もばいるめにゅー -->
    <div id="sideMenu" class="bg-yellow-600"
      class:hidden={!$hamburgerrrrr}><!-- とりま -->
      <ul class="flex items-center">
        {#each navLinks as { path, name }}
          <li class="" class:navLinkActive={$page.path === path}>
            <a class="text-white"
               sveltekit:prefetch
               href={path}>{name}</a>
          </li>
        {/each}
        <li class="">
          <a class="text-white"
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
  #sideMenu .navLinkActive {
    @apply bg-red-600;
  }
  #theMenuButton .hamburgerrrrr {
    /* ハンバーガーボタン(アクティブ) */
  }
</style>
