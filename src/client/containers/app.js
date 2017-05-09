import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getBreadcrumbs } from '../util';
import 'bootstrap/dist/css/bootstrap.css';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import './app.less';

class App extends Component {
  getChildContext() {
    const { breadcrumbs } = this.props;
    return { breadcrumbs };
  }

  render() {
    const { children } = this.props;
    return (
      <CSSTransitionGroup 
        transitionName="app"
        transitionEnterTimeout={500}
        className='app'>
        {children}
      </CSSTransitionGroup>
    );
  }
}

App.childContextTypes = {
  breadcrumbs: PropTypes.string,
};

App.propTypes = {
  children: PropTypes.object,
  breadcrumbs: PropTypes.string.isRequired,
};

const mapStateToProps = (state, { children, routes }) => ({ 
  children,
  breadcrumbs: getBreadcrumbs(routes),
});

export default connect(mapStateToProps)(App);
