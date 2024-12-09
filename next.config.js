const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    _next_intl_trailing_slash: '1'
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'harezm.com']
    }
  }
};

module.exports = withNextIntl(nextConfig);
