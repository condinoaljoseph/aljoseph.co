const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer({
	pageExtensions: ['tsx', 'md', 'mdx'],
	images: {
		domains: ['pbs.twimg.com', 'images.unsplash.com']
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			require('./scripts/rss');
		}

		return config;
	},
	experimental: {
		appDir: true
	}
})

