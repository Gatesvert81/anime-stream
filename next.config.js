/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.myanimelist.net', 'img.youtube.com']
  }
}

module.exports = nextConfig
