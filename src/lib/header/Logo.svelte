<script lang="ts">
  export let url: string = undefined
</script>

<div class="relative h-full flex items-center">
  <img class="h-full pointer-events-none" src="/icon.png" alt="Logo"><!-- SVGアニメーションにしたい -->
  <span class="inline-block mx-2 text-xl font-black">神戸高専電子計算機部</span>
  {#if url !== undefined}
    <a class="absolute h-full w-full inset-0" href="{url}"></a>
  {/if}
</div>
