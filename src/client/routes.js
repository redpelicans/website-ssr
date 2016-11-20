import { App } from './containers';

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

const loadRoute = (cb) => (module) => cb(null, module.default);
const errorLoading = (err) => console.error('Dynamic page loading failed', err);
const routes = (
  path: '/',
  component: App,
  name: 'Home', 
  indexRoute: {
    System.import('./components/home').then(loadroute(cb)).catch(errorLoading);
  },
  childRoutes: [
    {
      path: 'home',
      name: 'Home',
      getComponent(location, cb) {
        require.ensure('./components/home').then(loadroute(cb)).catch(errorLoading);
      }
    },
    {
      path: 'technologies',
      name: 'Technologies',
      getComponent(location, cb) {
        require.ensure('./components/technologies').then(loadroute(cb)).catch(errorLoading);
      }
    },
    {
      path: 'portfolio',
      name: 'Portfolio',
      getComponent(location, cb) {
        require.ensure('./components/portfolio').then(loadroute(cb)).catch(errorLoading);
      }
    },
    {
      path: '*',
      name: 'Home',
      getComponent(location, cb) {
        require.ensure('./components/home').then(loadroute(cb)).catch(errorLoading);
      }
    }
  ],
);

export default routes;
