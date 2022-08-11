const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.scdn.co', 'www.whosampled.com']
  },
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'scontent-*.xx.fbcdn.net'
        }
      ]
    }
  }
}

module.exports = nextConfig
