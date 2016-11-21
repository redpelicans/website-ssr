import React  from 'react';
import { renderToString } from 'react-dom/server';
import { getFile, getHashedUrl } from './util';
import { RouterContext, match } from 'react-router';
import routes  from '../client/routes';
import { Provider } from 'react-redux';
import { App } from '../client/containers'
import { createStore, combineReducers } from 'redux';
import { menu } from '../client/reducers';
import { justSSR, dist as distConfig } from '../../config';

const appJsUrl = getHashedUrl('app', '.js');
const vendorJsUrl = getHashedUrl('vendor', '.js');
const appCss = getFile(distConfig.path, 'styles', '.css');

const indexHtml = ({ appCss, html, vendorJsUrl, appJsUrl, preloadedState, justSSR }) => `
  <html>
    <head> 
      <style type="text/css"> ${appCss} </style>
    </head>
    <body>
      <div id='__APP__'>${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)};
      </script>
      <script src='${vendorJsUrl}'></script>
      <script src='${justSSR ? '' : appJsUrl}'></script>
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
      const Root = <Provider store={store}><RouterContext {...renderProps}/></Provider>;
      const html = renderToString(Root);
      const preloadedState = store.getState();
      res.send(indexHtml({ justSSR, appCss, html, vendorJsUrl, appJsUrl, preloadedState }));
    }
  });
}

export default renderIndexPage;

