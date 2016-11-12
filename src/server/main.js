import 'ignore-styles';
import http from 'http';
import path from 'path';
import url from 'url';
import express from 'express';
import compression from 'compression';
import ServerPage from './ssr';
import React from 'react';
import { renderToString } from 'react-dom/server';

const PORT = 5555;
const HOST = '0.0.0.0';
const getUrl = (server) => `http://${server.address().address}:${server.address().port}`;
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
