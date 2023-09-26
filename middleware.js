const { createMiddleware } = require('next-intl');
const messages = {
  en: require('./dictionaries/en.json'), // Replace with the actual paths to your translation files.
  ar: require('./dictionaries/ar.json'),
  // Add translations for other locales as needed.
};

const middleware = createMiddleware({
  // Configure your middleware options here.
  locales: ['en', 'ar'], // List of supported locales.
  defaultLocale: 'en',   // Default locale.
  messages,
});

// Use the middleware in your custom server.
server.use(middleware);

// Your other custom server code here...