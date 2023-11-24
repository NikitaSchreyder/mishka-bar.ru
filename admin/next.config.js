/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    apiUrl: 'http://api.trade-good.ru/',
    publicUrl: 'http://trade-good.ru/public/'
  }
}

module.exports = nextConfig
