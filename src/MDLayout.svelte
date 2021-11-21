<script>
	import Meta from "$lib/Meta.svelte"

	export let title         = "\"hello, world\""
	export let description   = "神戸高専電算部のウェブサイト"
	export let author        = "KCCTdensan"
	export let noRobots      = false
	export let noTitleFormat = false
</script>

<Meta { ...{ title, description, author, noRobots, noTitleFormat } } />

<slot>Hello from MarkDown!</slot>
