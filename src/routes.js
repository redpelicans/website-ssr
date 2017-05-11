if (typeof System === 'undefined') {
  console.log('polyfill System.import');
  global.System = {};
  global.System.import = (mod) => new Promise((resolve) =>  resolve(require(mod)));
}
else if (typeof System.import === 'undefined') {
  console.log('polyfill System.import');
  global.System.import = (mod) => new Promise((resolve) =>  resolve(require(mod)));
};

const loadRoute = (cb) => (module) => cb(null, module.default);
const errorLoading = (err) => console.error('Dynamic page loading failed', err);

import Home from './client/components/home';
import Technologies from './client/components/technologies';
import Portfolio from './client/components/portfolio';

const routes = ([
    {
      path: '/home',
      name: 'home',
      exact: true,
      component: Home,
      default: true,
    },
    {
      path: '/technologies/:anchor?',
      exact: false,
      name: 'technologies',
      component: Technologies,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      exact: true,
      component: Portfolio,
    },
  ]
);

export const defaultRoute = () => routes.filter(r => r.default)[0];
export default routes;
