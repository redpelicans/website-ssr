import 'ignore-styles';
import path from 'path';
import http from 'http';
import express from 'express';
import compression from 'compression';
import favicon from 'serve-favicon';
import renderIndexPage from './ssr';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { justSSR, compress, server, public as publicConfig, build as buildConfig } from '../../config';

const { host, port } = server;
const getUrl = (server) => `http://${server.address().address}:${server.address().port}`;
const createServer = (cb) => {
  const app = express();
  const httpServer = http.createServer(app);

  if (justSSR) console.warn('Warning, you are running server in SSR exclusive mode');

  app.use(favicon(path.join(publicConfig.path, 'favicon.ico')));
  compress && app.use(compression());
  app.use('/public', express.static(publicConfig.path));
  app.use('/build', express.static(buildConfig.path));
  app.use(renderIndexPage);

  httpServer.listen(port, host, () => {
    httpServer.url = getUrl(httpServer);
    cb && cb(null, httpServer);
  });
}

createServer((err, server) => {
  console.log(`server started on ${server.url}`);
});
