<script context="module" lang="ts">
	// load data
	export async function load({ fetch }) {
		// request data from endpoint
		const posts = await fetch('/api/posts').then((r: any) => r.json());

		// console.log('api get', posts);
		// assign it to the variable
		return {
			props: { posts }
		};
	}
</script>

<script lang="ts">
	import PostCard from './../../components/PostCart.svelte';
	export let posts: any;
</script>

<div>
	<!-- <h1 class="text-3xl text-black font-semibold py-4">Why I keep a research blog</h1>
	<h3 class="font-semibold text-black py-3">
		Writing has made me a better thinker and researcher. I expand on my reasons why.
	</h3>
	<h6 class="uppercase font-semibold text-xs py-2 text-gray-500">published</h6>
	<h6 class="text-xs py-2">12 January 2022</h6>
	<hr class="py-6" /> -->

	{#each posts as post}
		<PostCard {...post} />
	{/each}

	<!-- <article class="prose">
		<h1>Garlic bread with cheese: What the science tells us</h1>
		<p>
			For years parents have espoused the health benefits of eating garlic bread with cheese to
			their children, with the food earning such an iconic status in our culture that kids will
			often dress up as warm, cheesy loaf for Halloween.
		</p>
		<p>
			But a recent study shows that the celebrated appetizer may be linked to a series of rabies
			cases springing up around the country.
		</p>

		<blockquote>Some quote</blockquote>

		<ol>
			<li>blah</li>
		</ol>

	</article> -->
</div>
