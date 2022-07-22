/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["antojandoando.com"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
