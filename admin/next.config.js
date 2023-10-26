/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    apiUrl: 'http://api.mishkabar.localhost/',
    publicUrl: 'http://public.mishkabar.localhost/'
  }
}

module.exports = nextConfig
