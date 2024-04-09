/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');
const nextConfig = {
  // swcMinify: true,
  reactStrictMode: false,
  // output: 'export'
  // images: {
  //   unoptimized: true
  // }
  i18n,
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  }
};

module.exports = nextConfig;
