<script>
	import Services from '../content/services.svelte';
	import Lower from '../content/lower.svelte';
	import Body from '../content/body.svelte';
	import Title from '../content/title.svelte';
	import Copy from '../content/copy.svelte';
	import data from '$lib/pwa.json';
</script>

<svelte:head>
	<title>Progressive Web Applications - Penrose Development</title>
</svelte:head>

<!-- Left Column -->
<div class="w-full md:w-3/4 order-1 md:order-2">
	<!-- Page Title -->
	<Title subtitle="Progressive Web Applications" />
	<!-- Body -->
	<Body>
		<div class="max-w-lg leading-loose tracking-tight">
			<Copy {data} />
		</div>
	</Body>
</div>
<!-- Services (Nav) -->
<Services>
	<div class="w-full md:w-1/4 md:pr-18 pt-12 md:pt-0 md:sticky md:bottom-0 order-1 md:order-3">
		<div class="max-w-md md:float-right md:text-right leading-loose tracking-tight md:mb-16">
			<p class="font-bold my-4">Services</p>
			<ul class="flex flex-wrap justify-between flex-row md:flex-col">
				<li>Website Development</li>
				<!-- <li>Slack Integrations</li> -->
			</ul>
		</div>
	</div>
</Services>
<!-- Blurb -->
<Lower />
