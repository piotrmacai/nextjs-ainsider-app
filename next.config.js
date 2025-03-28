/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    esmExternals: true,
    // Font loading configuration
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: {
          subsets: ['latin'],
          display: 'swap',
          timeout: 30000, // 30 seconds timeout
        },
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "ainsider.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
