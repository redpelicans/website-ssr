import React  from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import localeData from '../../i18n/data.json';
import { getFile, getHashedUrl } from './util';
import routes  from '../routes';
import App from '../client/components/app'
import { justSSR, build as buildConfig, public as publicConfig } from '../../config';

addLocaleData([...en, ...fr]);

const appJsUrl = getHashedUrl('app', '.js');
const vendorJsUrl = getHashedUrl('vendor', '.js');
const appCss = getFile(buildConfig.path, 'styles', '.css');
const kro = getFile(publicConfig.path, 'kro.min', '.js');

const indexHtml = ({ appCss, html, vendorJsUrl, appJsUrl, preloadedState, justSSR }) => `
  <html>
    <head>
      <title>redpelicans</title>
      <style type="text/css"> ${appCss} </style>
      <script>${kro}</script>
      <meta charset="utf-8">
    </head>
    <body>
      <div id='__APP__'>
        ${html}
      </div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)};
      </script>
      <script>
        $kro.sync({ scripts: ['${vendorJsUrl}', '${justSSR ? null : appJsUrl}'], ready: () => console.log('App loaded.') });
      </script>
    </body>
  </html>
`;

const language = 'en';
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

const renderIndexPage = (req, res) => {
  const context = {};
  const Root = (
    <IntlProvider locale={language} messages={messages}> 
      <Router location={req.url} context={context}>
        <App />
      </Router>
    </IntlProvider>
  );
  const html = renderToString(Root);
  if (context.url) {
    res.redirect(301, context.url);
  }
  else {
    res.send(indexHtml({ justSSR, appCss, html, vendorJsUrl, appJsUrl, preloadedState: {toto: 1} }));
  }
}

export default renderIndexPage;

