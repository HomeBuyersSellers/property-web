// Import the dotenv package to load environment variables
const dotenv = require('dotenv');

// Load environment variables from a .env file (if it exists)
dotenv.config();

// Next.js configuration
const nextConfig = {
  reactStrictMode: true,
  skipTrailingSlashRedirect: true,
  images: {
    domains: ['mdbcdn.b-cdn.net'], // Define allowed image domains
  },
};

// Import the next-intl plugin
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.js'
);

// Export the combined configuration
module.exports = withNextIntl(nextConfig);
