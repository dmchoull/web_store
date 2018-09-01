const express = require('express');
const next = require('next');
const api = require('./api/bestbuy-api');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/api/deals', async (req, res) => {
    const products = await api.fetchDeals();
    res.status(200).send({ products });
  });

  server.get('/api/search', async (req, res) => {
    const products = await api.search(req.query.q);
    res.status(200).send({ products });
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
