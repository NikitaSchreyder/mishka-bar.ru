/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    apiUrl: 'http://api.mishkabar.localhost/',
    publicUrl: 'http://public.mishkabar.localhost/',
    links: {
      vk: 'https://vk.com/club211107184',
      tg: 'https://t.me/mishka_bar_surgut',
      map: 'https://yandex.ru/maps/-/CCU0MRcY8C',
      yafood: 'https://eda.yandex.ru/surgut/r/miska_1635151764'
    }
  }
}

module.exports = nextConfig
