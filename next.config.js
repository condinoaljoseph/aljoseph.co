const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/
});

module.exports = withMDX({
	pageExtensions: ['tsx', 'md', 'mdx'],
	images: {
		domains: ['pbs.twimg.com', 'images.unsplash.com']
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			require('./scripts/rss');
		}

		return config;
	}
});
