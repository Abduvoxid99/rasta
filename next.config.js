/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate");

const nextConfig = nextTranslate({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["cdn.rasta.app"],
  },
  trailingSlash: true,
});

module.exports = nextConfig;
