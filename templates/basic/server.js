const express = require('express');
const next = require('next');

const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app, ({ req, res, route, query }) => {
  app.render(req, res, route.page, query);
});

const port = 8080;

app.prepare().then(() => {
  const server = express();
  const router = express.Router();

  server.get('/health', (req, res) => {
    res.send('OK');
  });

  router.get('*', (req, res) => {
    return handle(req, res);
  });

  server.use(handle);

  server.listen(port, err => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
