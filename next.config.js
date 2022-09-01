/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "linder3hs.github.io",
      "www.cloudways.com",
      "tailwindui.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
