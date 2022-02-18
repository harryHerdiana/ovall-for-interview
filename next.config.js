const moduleExports = {
  swcMinify: true,
  experimental: {
    workerThreads: true,
    cpus: 4
  },
  images: {
    domains: ['www.datocms-assets.com']
  },
  async redirects() {
    return [
      {
        source: '/source',
        destination: '/destination/',
        permanent: true
      }
    ]
  }
}

module.exports = moduleExports
