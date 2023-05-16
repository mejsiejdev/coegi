/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
        port: '',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
