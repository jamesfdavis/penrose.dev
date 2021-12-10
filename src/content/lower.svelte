<script>
	import Phone from './phone.svelte';
</script>

<slot>
	<div class="w-full md:w-3/4 order-2 md:order-4">
		<div class="max-w-lg leading-loose tracking-tight">
			<p class="font-bold my-4 md:my-12 font-design">About</p>
			<p class="mb-8 font-copy  text-lg">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies mi quis.
				Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Amet
				consectetur adipiscing elit pellentesque habitant. Non blandit massa enim nec dui nunc.
				Aliquet lectus proin nibh nisl condimentum id.
			</p>
			<ul class="flex flex-wrap justify-between flex-row md:flex-col font-copy">
				<li>Twin Falls, Idaho</li>
				<li><Phone /></li>
			</ul>
		</div>
	</div>
</slot>
