import React from 'react';
import { render } from 'react-dom';
import routes from '../routes';
import configureStore from './store/configureStore';
import { browserHistory as history, match, Router, applyRouterMiddleware } from 'react-router';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import localeData from '../../i18n/data.json';
import { useScroll } from 'react-router-scroll';

addLocaleData([...en, ...fr]);
/*
const language = (
  (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage
);
*/
const language = 'en';
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

const initialState = window.__PRELOADED_STATE__;
const store = configureStore(initialState);
const mountNode = window.document.getElementById('__APP__');
const scrollBack = (prevRouterProps, { params, location }) => {
  if (params.anchor) return params.anchor;
  return prevRouterProps && location.pathname !== prevRouterProps.location.pathname;
};
match({ history, routes }, (error, redirectLocation, renderProps) => {
  const root = (
    <Provider store={store}>
      <IntlProvider locale={language} messages={messages}>
        <Router {...renderProps} />
      </IntlProvider>
    </Provider>
  );
  render(root, mountNode);
})
