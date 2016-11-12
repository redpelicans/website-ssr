import http from 'http';
import path from 'path';
import url from 'url';
import R from 'ramda';
import express from 'express';
import ServerPage from './ssr';
import React from 'react';
import { renderToString } from 'react-dom/server';
import compression from 'compression';

const PORT = 5555;
const HOST = '172.22.0.2';

const getUrl = (server) => `http://${server.address().address}:${server.address().port}`;
const getParams = R.compose(R.fromPairs, R.map(R.split('=')), R.split('&'));

const createServer = (cb) => {
  const app = express();
  const httpServer = http.createServer(app);

  app.use(compression());
  app.use('/dist', express.static(path.join(__dirname, '../dist')));
  app.use(function(req, res, next){ 
    const html = renderToString(<ServerPage/>);
    res.send(html) 
  });

  httpServer.listen(PORT, HOST, () => {
    httpServer.url = getUrl(httpServer);
    cb && cb(null, httpServer);
  });
}

createServer((err, server) => {
  console.log(`server started on ${server.url}`);
});
