/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['uz', 'ru', 'en', ],
    defaultLocale: 'ru'
  },
}

module.exports = nextConfig
