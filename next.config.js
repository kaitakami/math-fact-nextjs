/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    DEEPL_AUTH_KEY: process.env.DEEPL_AUTH_KEY,
    RAPIDAPI_KEY: process.env.RAPIDAPI_KEY
  }
}

module.exports = nextConfig
