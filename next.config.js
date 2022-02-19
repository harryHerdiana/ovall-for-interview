// const { l18n } = require('./next-i18next.config')

const moduleExports = {
  swcMinify: true,
  experimental: {
    workerThreads: true,
    cpus: 4
  },
  images: {
    domains: ['www.datocms-assets.com']
  },
  // l18n,
  i18n: {
    locales: ['de-DE', 'en'],
    defaultLocale: 'de-DE',
    localeDetection: false
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
