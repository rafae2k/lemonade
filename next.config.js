const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['scontent-iad3-1.xx.fbcdn.net', 'i.scdn.co', 'www.whosampled.com']
  }
}

module.exports = nextConfig
