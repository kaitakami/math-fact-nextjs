/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    PASSWORD: process.env.PASSWORD
  }
}

module.exports = nextConfig
