<script lang="ts">
	import Meta from "$lib/Meta.svelte"

	export let title         : string = "\"hello, world\""
	export let description   : string = "神戸高専電算部のウェブサイト"
	export let author        : string = "KCCTdensan"
	export let noTitleFormat : bool   = false
</script>

<Meta { ...{ title, description, author, noTitleFormat } } />

<slot>Hello from MarkDown!</slot>