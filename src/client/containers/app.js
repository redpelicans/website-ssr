import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './app.less';

const App = ({ children }) => (
  <div className="app">
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.object,
};

const mapStateToProps = (state, props) => {
  console.log('======================== APP')
  console.log(props)
  return {}
  return {
    currentPage: state.currentPage.name,
    isMenuVisible: state.menu.isVisible,
  };
};


export default connect(mapStateToProps)(App);
// export default App;
