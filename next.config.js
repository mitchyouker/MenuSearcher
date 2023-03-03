/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/steven-tey/precedent",
        permanent: false,
      },
    ];
  },
  // except for webpack, other parts are left as generated
  // webpack: (config, context) => {
  //   config.watchOptions = {
  //     poll: 1000,
  //     aggregateTimeout: 300
  //   }
  //   return config
  // }
};

module.exports = nextConfig;
