<script lang="ts">
	export let title: string;
	export let summary: string;
	export let pub_date: string;
	export let url: string;
	export let short: boolean = true;
</script>

{#if short}
	<h1 class="text-xl text-black font-semibold pt-4"><a href={url}>{title}</a></h1>
	<h6 class="text-sm font-semibold text-gray-600">{pub_date}</h6>
	<article class="font-normal text-black pb-8">{summary}</article>
{:else}
	<h1 class="text-3xl text-black font-semibold py-4"><a href={url}>{title}</a></h1>
	<h3 class="font-semibold text-black py-3">{summary}</h3>
	<h6 class="uppercase font-semibold text-xs text-gray-500">published</h6>
	<h6 class="text-xs">{pub_date}</h6>
	<hr class="my-4" />
{/if}
