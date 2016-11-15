import React  from 'react';
import { renderToString } from 'react-dom/server';
import { getHashedUrl } from './util';
import { RouterContext, match } from 'react-router';
import routes  from '../client/routes';
import { Provider } from 'react-redux';
import { App } from '../client/containers'
import { createStore, combineReducers } from 'redux';
import { currentPage, menu } from '../client/reducers';

const appJsUrl = getHashedUrl('app', '.js');
const vendorJsUrl = getHashedUrl('vendor', '.js');
const appCssUrl = getHashedUrl('styles', '.css');

const indexHtml = ({ appCssUrl, html, vendorJsUrl, appJsUrl, preloadedState }) => `
  <html>
    <head> 
      <link rel="stylesheet" type="text/css" href="${appCssUrl}"/>
    </head>
    <body>
      <div id='__APP__'>${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)};
      </script>
      <script src='${vendorJsUrl}'></script>
      <script src='${appJsUrl}'></script>
    </body>
  </html>
`;

const initialState = {
  menu: {
    isVisible: false,
  },
};

const configureStore = (initialState) => createStore(
  combineReducers({ menu, currentPage }),
  initialState
);

const renderIndexPage = (req, res) => {
  console.log(req.path.toString());
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
      res.send(indexHtml({ appCssUrl, html, vendorJsUrl, appJsUrl, preloadedState }));
    }
  });
}

export default renderIndexPage;

