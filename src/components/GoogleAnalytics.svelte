<script>
	import { page } from '$app/stores';

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'G-P46KKR7THR', {
				page_path: $page.url.pathname
			});
		}
	}
</script>
