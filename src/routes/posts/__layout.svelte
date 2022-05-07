<script lang="ts">
	import '../../app.css';
	import GoogleAnalytics from './../../components/GoogleAnalytics.svelte';
	import Header from './../../components/Header.svelte';

	let scale: number = 2;
</script>

<div class="flex flex-col w-full h-screen">
	<header class="shadow-sm">
		<Header />
	</header>

	<main class="container flex-grow px-8 max-w-3xl">
		<div class="container mx-auto min-w-full">
			<slot />
		</div>
	</main>

	<GoogleAnalytics />

	<footer class="w-full bg-gray-100">
		<div class="text-center text-xs bg-accent-1 py-1 items-center">
			<span class="font-semibold text-black">penrose.dev</span>elopment @
			<span class="font-mono">0.0.2</span>
		</div>
	</footer>
</div>
