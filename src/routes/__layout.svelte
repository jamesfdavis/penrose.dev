<script lang="ts">
	import '../app.css';
	import GoogleAnalytics from '$lib/GoogleAnalytics.svelte';
</script>

<div class="flex flex-col w-full h-screen">
	<slot />
	<GoogleAnalytics />
</div>
