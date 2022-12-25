/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "linder3hs.github.io",
      "www.cloudways.com",
      "tailwindui.com",
      "api.github.com",
      "avatars.githubusercontent.com",
      "api.iconify.design",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
