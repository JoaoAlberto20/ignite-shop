/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      'files.stripe.com'
    ]
  },

  experimental: {
    images: {
      unoptimized: true,
    },
  }
}

module.exports = nextConfig
