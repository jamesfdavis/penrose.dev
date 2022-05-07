<script lang="ts">
	import '../app.css';
	import GoogleAnalytics from '../lib/GoogleAnalytics.svelte';
	import Header from '$lib/Header.svelte';

	let scale: number = 2;
</script>

<div id="content-body" class="flex flex-col w-full h-screen">
	<header class="shadow-md">
		<Header />
	</header>

	<main class="flex-grow px-6 max-w-4xl">
		<div class="container mx-auto">
			<slot />
		</div>
	</main>

	<GoogleAnalytics />

	<footer class="w-full bg-gray-50">
		<div class="text-center text-xs bg-accent-1 py-1 items-center">
			<span class="font-semibold text-black">penrose.dev</span>elopment @
			<span class=" text-secondary font-mono">0.0.2</span>
		</div>
	</footer>
</div>
