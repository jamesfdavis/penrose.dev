<script>
	import Sub from './subtitle.svelte';
	export let subtitle;
</script>

<slot>
	<h1 class="text-black-800 text-2xl font-bold font-design">
		<a href="/" class="nav">Penrose Development</a>
	</h1>

	<Sub {subtitle} />
</slot>
