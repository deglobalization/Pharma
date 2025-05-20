/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  output: 'export',
  basePath: '/Pharma',
  assetPrefix: '/Pharma',
}

module.exports = nextConfig 