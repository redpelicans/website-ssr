import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import localeData from '../../i18n/data.json';
import App from './components/app';

addLocaleData([...en, ...fr]);
/*
const language = (
  (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage
);
*/
const language = 'en';
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

// const initialState = window.__PRELOADED_STATE__;
const mountNode = window.document.getElementById('__APP__');
const root = (
  <IntlProvider locale={language} messages={messages}>
    <Router>
      <App ssr={true} />
    </Router>
  </IntlProvider>
);
render(root, mountNode);
