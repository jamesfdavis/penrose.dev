<script lang="ts">
	import '../app.css';
	import GoogleAnalytics from '../lib/GoogleAnalytics.svelte';
</script>

<main class="flex-grow bg-transparent">
	<slot />
</main>

<GoogleAnalytics />

<footer>
	<hr />
	<div class="text-center text-xs py-1 items-center text-gray-500 bg-white">
		<span class="font-semibold">penrose.dev</span>elopment @
		<span class=" text-gray-300 font-mono">1.1.1</span>
	</div>
</footer>
