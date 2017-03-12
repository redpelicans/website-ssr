import React  from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import localeData from '../../i18n/data.json';
import { getFile, getHashedUrl } from './util';
import routes  from '../routes';
import { App } from '../client/containers'
import { menu } from '../client/reducers';
import { justSSR, dist as distConfig, public as publicConfig } from '../../config';

addLocaleData([...en, ...fr]);

const appJsUrl = getHashedUrl('app', '.js');
const vendorJsUrl = getHashedUrl('vendor', '.js');
const appCss = getFile(distConfig.path, 'styles', '.css');
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
        $kro.sync({ scripts: ['${vendorJsUrl}', '${justSSR ? '' : appJsUrl}'], ready: () => console.log('App loaded.') });
      </script>
    </body>
  </html>
`;

const initialState = {
  menu: {
    isVisible: false,
  },
};

const configureStore = (initialState) => createStore(
  combineReducers({ menu }),
  initialState
);

const language = 'en';
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

const renderIndexPage = (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search)
    } else if (error) {
      res.send(500, error.message)
    } else if (renderProps == null) {
      res.send(404, 'Not found')
    } else {
      const store = configureStore(initialState);
      const Root = (
        <Provider store={store}>
          <IntlProvider locale={language} messages={messages}> 
            <RouterContext {...renderProps}/>
          </IntlProvider>
        </Provider>
      );
      const html = renderToString(Root);
      const preloadedState = store.getState();
      res.send(indexHtml({ justSSR, appCss, html, vendorJsUrl, appJsUrl, preloadedState }));
    }
  });
}

export default renderIndexPage;

