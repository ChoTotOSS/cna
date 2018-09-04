import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import nextConfig from './app/next.config';
import routes from './app/routes';

const next = require('next');

const app = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: path.resolve(__dirname, 'app'),
  conf: nextConfig,
});

const handle = routes.getRequestHandler(app, ({ req, res, route, query }) => {
  app.render(req, res, route.page, query);
});

const port = 8080;

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(cookieParser());

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
