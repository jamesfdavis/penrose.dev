<script lang="ts">
	export let title: any;
	export let description: any;
	export let url: any;
</script>

<article class="prose">
	<a href={url}>{title}</a>
	<p>{description}</p>
</article>
