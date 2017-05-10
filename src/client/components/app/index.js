import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes, { defaultRoute } from '../../../routes';
import { transitionedPage } from '../../utils';
import 'bootstrap/dist/css/bootstrap.css';
import './app.less';

const makeRoute = (route, withTransition) => props => {
  const pageName = 'app';
  const Wrapped = withTransition ? transitionedPage(pageName)(route.component) : route.component;
  return <Wrapped {...props} name={route.name} />
};

class App extends Component {
  state = { }

  componentWillMount() {
    const { ssr } = this.props;
    this.setState({ ssr });
  }

  componentDidUpdate() {
    const { ssr } = this.state;
    if (ssr) this.setState({ ssr: false });
  }

  render() {
    const { ssr } = this.state;
    return (
      <div className='app'>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={makeRoute(route, !ssr)}
            />
          ))}
          <Redirect to={defaultRoute().path} />
        </Switch>
      </div>
    );
  }
};

export default App;