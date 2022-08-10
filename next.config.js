const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'scontent-iad3-1.xx.fbcdn.net',
      'scontent-iad3-2.xx.fbcdn.net',
      'i.scdn.co',
      'www.whosampled.com'
    ]
  }
}

module.exports = nextConfig
