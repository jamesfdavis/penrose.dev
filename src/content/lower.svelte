<script>
	import Phone from './phone.svelte';
</script>

<slot>
	<div class="w-full md:w-3/4 order-2 md:order-4">
		<div class="max-w-lg leading-loose tracking-tight">
			<p class="font-bold my-4 md:my-12 font-design">Contact Us</p>
			<ul class="flex flex-wrap justify-between flex-row md:flex-col font-copy">
				<li>Twin Falls, Idaho</li>
				<li><Phone /></li>
			</ul>
		</div>
	</div>
	<div class="w-full order-5 md:order-5 pt-10 text-sm">
		<a href="/privacy" title="Privacy Policy">Privacy Policy</a>
	</div>
</slot>
