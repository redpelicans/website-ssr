import { join } from 'path';
import fs from 'fs';
import crypto from 'crypto';
import React  from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';

const DISTPATH = "./dist";
const md5 = (string) => crypto.createHash('md5').update(string).digest('hex');
const getFile = (path, name, ext='') => fs.readFileSync(join(path, name + ext));
const getUrl = (name, ext) => `/dist/${name}${ext}?${md5(getFile(DISTPATH, name, ext))}`;

const synkroLib= 'synkro.min.js';
const synkroLibCode = getFile(DISTPATH, synkroLib);
const target = 'bundle';
const appJsUrl = getUrl('app', '.js');
const vendorJsUrl = getUrl('vendor', '.js');
const appCssUrl = getUrl('app', '.css');

const synkroReadyCode = `$kro.ready('${target}', function() { console.log("ready to race ...") })`;
const synkroTargetCode = `$kro(['${vendorJsUrl}', '${appJsUrl}'], { target: '${target}' })`;
const InlineScript = ({ code }) => <script dangerouslySetInnerHTML={{ __html: code }}/>;

const ServerPage = () => (
  <html>
    <head>
      <link rel='stylesheet' href={appCssUrl} type='text/css'/>
      <InlineScript code={synkroLibCode}/>
      <InlineScript code={synkroTargetCode}/>
      <InlineScript code={synkroReadyCode}/>
    </head>
    <body>
      <div id='root' dangerouslySetInnerHTML={{ __html: renderToString(<App/>) }}></div>
    </body>
  </html>
);

export default ServerPage;

