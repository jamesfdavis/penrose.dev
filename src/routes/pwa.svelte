<script>
	import Services from '../content/services.svelte';
	import Lower from '../content/lower.svelte';
	import Body from '../content/body.svelte';
	import Title from '../content/title.svelte';
	import Copy from '../content/copy.svelte';
	import Phone from '../content/phone.svelte';
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
<Services />
<!-- Blurb -->
<Lower>
	<div class="w-full md:w-3/4 order-2 md:order-4">
		<div class="max-w-lg leading-loose tracking-tight">
			<p class="font-bold my-4 md:my-4 font-design">Contact</p>
			<ul class="flex flex-wrap justify-between flex-row md:flex-col font-copy">
				<li>Twin Falls, Idaho</li>
				<li><Phone /></li>
			</ul>
		</div>
	</div>
</Lower>
