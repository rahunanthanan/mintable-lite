/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.dicebear.com', 'mintablelite.rahu.me']
  }
}

module.exports = nextConfig
