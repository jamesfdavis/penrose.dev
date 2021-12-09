const config = {
	mode: 'jit',
	purge: {
		enabled: !process.env.ROLLUP_WATCH,
		content: ['./build/index.html', './src/**/*.svelte']
	},

	theme: {
		extend: {},
		fontFamily: {
			'copy': ['Georgia', 'Times New Roman', "Times", "serif"],
			'design': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'sans-serif']
		}
	},
	plugins: []
};

module.exports = config;
