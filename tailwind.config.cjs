const config = {
	mode: 'jit',
	purge: {
		enabled: !process.env.ROLLUP_WATCH,
		content: ['./build/index.html', './src/**/*.svelte']
	},

	theme: {
		extend: {},
		fontFamily: {
			'body': ["Georgia", 'Times New Roman', "Times", "serif"]
		}
	},
	plugins: []
};

module.exports = config;
