const { i18n } = require('./next-i18next.config')

const moduleExports = {
  swcMinify: true,
  experimental: {
    workerThreads: true,
    cpus: 4
  },
  images: {
    domains: ['www.datocms-assets.com']
  },
  i18n,
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
