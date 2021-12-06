<svelte:head>
	<title>Penrose Development</title>
	<style>
		.quicksand {
			font-family: 'Nunito', sans-serif;
		}

		::selection {
			background: #e9d8fd;
			color: #202684;

			/* WebKit/Blink Browsers */
		}

		::-moz-selection {
			background: #e9d8fd;
			color: #202684;
			/* Gecko Browsers */
		}

		a:not(.nav) {
			font-weight: bold;
			text-decoration: none;
			padding: 2px;
			background: linear-gradient(to right, #5a67d8, #5a67d8);
			background-repeat: repeat-x;
			background-size: 100% 2px;
			background-position: 0 95%;
			-webkit-transition: all 150ms ease-in-out;
			-moz-transition: all 150ms ease-in-out;
			-ms-transition: all 150ms ease-in-out;
			-o-transition: all 150ms ease-in-out;
			transition: all 150ms ease-in-out;
		}

		a:hover {
			color: #b794f4;
			font-weight: bold;
			text-decoration: none;
			padding-bottom: 2px;
			background: linear-gradient(to right, #9f7aea, #e9d8fd);
			background-repeat: repeat-x;
			background-size: 100% 2px;
			background-position: 50% 95%;
			-webkit-transition: color 150ms ease-in-out;
			-moz-transition: color 150ms ease-in-out;
			-ms-transition: color 150ms ease-in-out;
			-o-transition: color 150ms ease-in-out;
			transition: color 150ms ease-in-out;
		}

		a:focus {
			outline: none;
			background: #e9d8fd;
		}
	</style>
</svelte:head>
<h1>Penrose Development</h1>
