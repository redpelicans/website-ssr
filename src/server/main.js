import 'ignore-styles';
import http from 'http';
import express from 'express';
import compression from 'compression';
import renderIndexPage from './ssr';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { server, public as publicConfig } from '../../config';

const { host, port } = server;
const { path } = publicConfig;
const getUrl = (server) => `http://${server.address().address}:${server.address().port}`;
const createServer = (cb) => {
  const app = express();
  const httpServer = http.createServer(app);

  app.use(compression());
  app.use('/public', express.static(path));
  app.use(renderIndexPage);

  httpServer.listen(port, host, () => {
    httpServer.url = getUrl(httpServer);
    cb && cb(null, httpServer);
  });
}

createServer((err, server) => {
  console.log(`server started on ${server.url}`);
});
