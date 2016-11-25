import { App } from './client/containers';

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
const routes = ({
  path: '/',
  component: App,
  name: 'Home', 
  indexRoute: {
    getComponent(location, cb) {
      System.import('./client/components/home').then(loadRoute(cb)).catch(errorLoading);
    }
  },
  childRoutes: [
    {
      path: 'home',
      name: 'Home',
      getComponent(location, cb) {
        System.import('./client/components/home').then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: 'technologies',
      name: 'Technologies',
      getComponent(location, cb) {
        System.import('./client/components/technologies').then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: 'portfolio',
      name: 'Portfolio',
      getComponent(location, cb) {
        System.import('./client/components/portfolio').then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: '*',
      name: 'Home',
      getComponent(location, cb) {
        System.import('./client/components/home').then(loadRoute(cb)).catch(errorLoading);
      }
    }
  ],
});

export default routes;
