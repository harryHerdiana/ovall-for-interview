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
        source: '/en/uber-uns',
        destination: '/en/about-us/',
        permanent: true,
        locale: false
      },
      {
        source: '/about-us',
        destination: '/uber-uns',
        permanent: true,
        locale: false
      },
      {
        source: '/discount/:discountCode',
        destination: '/api/discount/:discountCode',
        permanent: true
      }
    ]
  }
}

module.exports = moduleExports
