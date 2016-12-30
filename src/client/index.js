import React from 'react';
import { render } from 'react-dom';
import routes from '../routes';
import configureStore from './store/configureStore';
import { browserHistory as history, match, Router } from 'react-router';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import localeData from '../../i18n/data.json';

addLocaleData([...en, ...fr]);
/*
const language = (
  (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage
);
*/
const language = 'en';
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

import 'bootstrap/dist/css/bootstrap.css';

const initialState = window.__PRELOADED_STATE__;
const store = configureStore(initialState);
const mountNode = window.document.getElementById('__APP__');
match({ history, routes }, (error, redirectLocation, renderProps) => {
  const root = (
    <Provider store={store}>
      <IntlProvider locale={language} messages={messages}>
        <Router {...renderProps}/>
      </IntlProvider>
    </Provider>
  );
  render(root, mountNode);
})
