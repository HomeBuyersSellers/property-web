const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Redirect URLs without a trailing slash to URLs with a trailing slash
  server.use((req, res, next) => {
    if (!req.path.endsWith('/') && req.path.length > 1) {
      const query = req.url.slice(req.path.length);
      res.redirect(301, req.path + '/' + query);
    } else {
      next();
    }
  });

  // Handle other routes using Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
