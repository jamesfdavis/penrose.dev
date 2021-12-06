const config = {
	mode: 'jit',
	purge: {
		enabled: !process.env.ROLLUP_WATCH,
		content: ['./build/index.html', './src/**/*.svelte']
	},

	theme: {
		extend: {}
	},

	plugins: []
};

module.exports = config;
