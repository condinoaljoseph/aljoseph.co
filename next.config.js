const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/
});

module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'md', 'mdx'],
	images: {
		domains: ['pbs.twimg.com', 'images.unsplash.com']
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			require('./utils/rss');
		}

		return config;
	}
});
