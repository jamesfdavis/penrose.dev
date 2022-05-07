<script context="module" lang="ts">
	export async function load({ fetch, params, url }) {
		// request post from [url].json.js endpoint
		const post = await fetch(`/api/${params.url}`).then((r) => r.json());

		return {
			props: { post }
		};
	}
</script>

<script lang="ts">
	export let post: any;
</script>

<h1 class="text-3xl text-black font-semibold py-4">{post.attributes.title}</h1>
<h3 class="font-semibold text-black py-3">Lorem Ipsum</h3>
<h6 class="uppercase font-semibold text-xs py-2 text-gray-500">published</h6>
<h6 class="text-xs py-2">07 May 2022</h6>
<hr class="py-6" />
<article>
	{@html post.html.value}
</article>
