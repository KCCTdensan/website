<script context="module" lang="ts">
	import Header from "$lib/header/Header.svelte"
	import "../app.css"
</script>

<div class="min-h-screen flex flex-col">
	<Header />

	<main class="flex flex-col">
		<slot>Hello!</slot>
	</main>

	<footer class="mt-auto justify-between">
		<!-- left -->
		<div></div>
		<!-- center -->
		<div class="flex flex-col justify-center">
			<div class="mx-auto flex">
				<div>(ぎてゅぶアイコン)</div>
				<div>(Twitterアイコン)</div>
			</div>
			<small class="mx-auto">&copy; 1974-{ new Date().getFullYear() } KCCTdensan 神戸高専電算部</small>
		</div>
		<!-- right -->
		<div></div>
	</footer>
</div>
