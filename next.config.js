const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    domains: ["pbs.twimg.com"],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/rss");
    }
    return config;
  },
  experimental: {
    appDir: true,
  },
});
