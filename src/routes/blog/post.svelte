<script lang="ts">
	import Title from '$lib/Title.svelte';
	let one_line: boolean = false;
</script>

<svelte:head>
	<title>Lorem Ipsum Test</title>
</svelte:head>

<Title
	title="Lorem Ipusm"
	url="/blog/post"
	summary="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
	pub_date="12 January 2022"
	short={one_line}
/>

<article class="prose max-w-max pt-4">
	<p>Lorem Ipsum</p>
	<p>Lorem Ipsum</p>
	<h2>Lorem Ipsum</h2>
	<hr />
	<blockquote>aquote</blockquote>

	<ol>
		<li>Lorem Ipsum</li>
	</ol>
</article>
