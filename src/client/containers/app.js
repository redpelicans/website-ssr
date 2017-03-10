import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getBreadcrumbs } from '../util';
import 'bootstrap/dist/css/bootstrap.css';
import './app.less';
import '../assets/images/favicon.ico';

class App extends Component {
  getChildContext() {
    const { breadcrumbs } = this.props;
    return { breadcrumbs };
  }

  render() {
    const { children } = this.props;
    return (
      <div className='app'>
        {children}
      </div>
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
