<script lang="ts">
	import '../app.css';
	import GoogleAnalytics from '../lib/GoogleAnalytics.svelte';
	import Header from '$lib/Header.svelte';
	import Icon from 'svelte-awesome';
	import { bookmark } from 'svelte-awesome/icons';
	import { barChart, mousePointer, lock, refresh, linode, filesO } from 'svelte-awesome/icons';

	let scale: number = 2;
</script>

<div id="content-body" class="flex flex-col w-full  h-screen">
	<header class="shadow-md">
		<Header />
	</header>

	<main class="flex-grow px-6 max-w-3xl">
		<div class="container  mx-auto">
			<slot />
		</div>
	</main>

	<GoogleAnalytics />

	<footer class="w-full">
		<div class="text-center text-xs bg-accent-1 py-1 items-center">
			<span class="font-semibold text-black">penrose.dev</span>elopment
			<span class=" text-secondary font-mono">0.0.2</span>
		</div>
	</footer>
</div>
