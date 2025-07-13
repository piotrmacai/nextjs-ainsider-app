/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "ainsider.co", "ainsider.store"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "ainsider.co",
      },
      {
        protocol: "https",
        hostname: "ainsider.store",
      },
    ],
  },
};

module.exports = nextConfig;

// const nextConfig = {
//   experimental: {
//     esmExternals: true,

//     fontLoaders: [
//       {
//         loader: '@next/font/google',
//         options: {
//           subsets: ['latin'],
//           display: 'swap',
//           timeout: 30000, 
//         },
//       },
//     ],
//   },
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ["localhost", "ainsider.co"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "cdn.sanity.io",
//         port: "",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
