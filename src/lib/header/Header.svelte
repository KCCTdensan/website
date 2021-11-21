<script lang="ts">
	import { page } from "$app/stores"
	// import logo from "./logo.svg"

	const navLinks = [
		{ path: "/",      name: "Top"   },
		{ path: "/about", name: "About" },
	]
</script>

<header class="flex select-none">
	<img class="pointer-events-none" src="/logo.png" alt="Logo">
	<nav>
		<ul class="flex">
			{#each navLinks as { path, name }}
				<li class:navLinkActive={$page.path === path}><a sveltekit:prefetch href={path}>{name}</a></li>
			{/each}
		</ul>
	</nav>
</header>

<style lang="postcss">
	.navLinkActive {
		@apply italic;
	}
</style>
