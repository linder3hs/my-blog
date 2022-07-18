/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.seobility.net", "linder3hs.github.io", "www.cloudways.com"],
  },
};

module.exports = nextConfig;
