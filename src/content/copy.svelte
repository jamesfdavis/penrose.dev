<script>
	export let data = undefined;
</script>

{#each data as { item, tag }, index}
	{#if tag === 'h2'}
		<h2 class="text-black-800 text-xl mt-12 md:my-12 font-design font-bold">{item}</h2>
	{/if}
	{#if tag === 'h3'}
		<h3 class="text-black-800 text-lg mt-12 md:my-6 font-design font-bold">{item}</h3>
	{/if}
	{#if tag === 'h4'}
		<h4 class="text-black-800 mt-12 font-design font-bold">{item}</h4>
	{/if}
	{#if tag === 'h5'}
		<h5 class="text-black-800 text-sm mt-12 font-design font-bold">{item}</h5>
	{/if}
	{#if tag === 'p'}
		<p class="font-copy mb-8 text-lg">{@html item}</p>
	{/if}
{/each}
