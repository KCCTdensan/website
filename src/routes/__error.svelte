<script context="module" lang="ts">
	export function load(props) {
		return { props }
	}
</script>

<script lang="ts">
	import Meta from "$lib/Meta.svelte"
	export let status : int     = undefined;
	export let error  : string  = undefined;
</script>

<Meta title="Error_{status}" description="エラーが発生しました．" />

<h1>
<pre><code><span class="text-red-600">error:</span> {error.message}
	x | assert(<span class="text-red-600">status != {status}</span>);
	  |        <span class="text-red-600">~~~~~~~^~~~~~</span></code>
</pre>
</h1>

<p>
	<!--{#if status === 404}
		お探しのページは見つかりませんでした……ごめんなさい………
	{/if}-->
</p>
