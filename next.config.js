const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/
});

module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'md', 'mdx'],
	images: {
		domains: ['pbs.twimg.com', 'images.unsplash.com']
	}
});
