const { withContentlayer } = require("next-contentlayer");

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  font-src 'self';  
`;

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
];

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
  headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
});
