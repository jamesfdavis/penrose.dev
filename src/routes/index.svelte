<script>
	import Lower from '../content/lower.svelte';
	import Services from '../content/services.svelte';
	import Body from '../content/body.svelte';
	import Title from '../content/title.svelte';
</script>

<svelte:head>
	<title>Penrose Development - Twin Falls, Idaho</title>
</svelte:head>

<!-- Left Column -->
<div class="w-full md:w-3/4 order-1 md:order-2">
	<!-- Page Title -->
	<Title />
	<!-- Content Body -->
	<Body />
</div>
<!-- Services (Nav) -->
<Services />
<!-- Blurb -->
<Lower />
