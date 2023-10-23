/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['uz', 'ru', 'en', ],
    defaultLocale: 'uz'
  },
}

module.exports = nextConfig
