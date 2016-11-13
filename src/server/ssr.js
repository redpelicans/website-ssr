import { join } from 'path';
import fs from 'fs';
import crypto from 'crypto';
import React  from 'react';
import { renderToString } from 'react-dom/server';
import { Root } from '../client/containers/root';
import { distPath } from '../../config';

const md5 = (string) => crypto.createHash('md5').update(string).digest('hex');
const getFile = (path, name, ext='') => fs.readFileSync(join(path, name + ext));
const getUrl = (name, ext) => `/dist/${name}${ext}?${md5(getFile(distPath, name, ext))}`;

const appJsUrl = getUrl('app', '.js');
const vendorJsUrl = getUrl('vendor', '.js');
// const appCssUrl = getUrl('app', '.css');

const ServerPage = () => {
  const html = renderToString(<Root store={store} routes={routes} history={history}/>);
  return (
    <html>
      <head>
        {/* <link rel='stylesheet' href={appCssUrl} type='text/css'/> */}
      </head>
      <body>
        <div id='_APP__' dangerouslySetInnerHTML={{ __html: html }}></div>
        <script src={vendorJsUrl}></script>
        <script src={appJsUrl}></script>
      </body>
    </html>
  );
}

export default ServerPage;

