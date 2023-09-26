/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['res.cloudinary.com'], // TODO
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'x.y.z', // TODO
        pathname: '/s/files/**', // TODO
      },
    ],
  },
}

module.exports = nextConfig
