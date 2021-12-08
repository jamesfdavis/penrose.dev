<script>
	import '../app.css';
</script>

<!-- Root Node  -->
<div class="font-body text-xl md:text-lg lg:text-lg">
	<!-- Main Body -->
	<div class="p-6 sm:p-10 md:p-16 flex flex-wrap">
		<!-- Left Column -->
		<div class="w-full md:w-3/4 order-1 md:order-2">
			<h1 class="font-bold my-6">Penrose Development</h1>
			<h2>Magic Valley Software Solutions</h2>
			<!-- Body -->
			<div class="max-w-lg leading-loose tracking-tight">
				<slot />
			</div>
		</div>
		<!-- Right Column -->
		<div class="w-full md:w-1/4 md:pr-18 pt-12 md:pt-0 md:sticky md:bottom-0 order-1 md:order-3">
			<div class="max-w-md md:float-right md:text-right leading-loose tracking-tight md:mb-16">
				<p class="font-bold my-4 md:my-12">Services</p>
				<ul class="flex flex-wrap justify-between flex-row md:flex-col">
					<li>Web Applications</li>
					<li>Slack Integrations</li>
				</ul>
			</div>
		</div>
		<div class="w-full md:w-3/4 order-2 md:order-4">
			<div class="max-w-lg leading-loose tracking-tight">
				<p class="font-bold my-4 md:my-12">About</p>
				<p class="mb-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies mi quis.
					Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Amet
					consectetur adipiscing elit pellentesque habitant. Non blandit massa enim nec dui nunc.
					Aliquet lectus proin nibh nisl condimentum id.
				</p>
				<ul class="flex flex-wrap justify-between flex-row md:flex-col">
					<li>Twin Falls, Idaho</li>
					<li><a href="tel:2084219675">(208) 421-9675</a></li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Pin to top right corner -->
	<!-- <div class="absolute top-0 right-0 h-12 w-18 p-4">
		<button class="js-change-theme focus:outline-none">🌙</button>
	</div> -->
</div>

<!-- <div class="p-6 sm:p-10 md:p-16 flex flex-wrap">

</div> -->

<!-- Pin to top right corner -->

<!-- <div class="absolute top-0 right-0 h-12 w-18 p-4 none">
	<button class="js-change-theme focus:outline-none">🌙</button>
</div> -->
<style>
</style>
