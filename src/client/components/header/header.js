import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { toggleMenu } from '../../actions';
import './header.less';

class Header extends Component {
  render() {
    const { isMenuVisible, toggleMenu } = this.props;
    const { breadcrumbs } = this.context;
    return (
      <div className="header">
        <div className="nav">
          <div className="brand text-center">
            <Link to="/">
              <span className="glyphicon glyphicon-send"></span>
              { 'REDPELICANS' }
            </Link>
          </div>
        </div>
        <div className="hidden-xs breadcrumbs">
          {breadcrumbs}
        </div>
        <div className={`toggle ${isMenuVisible ? 'active' : ''}`}>
          <a onClick={toggleMenu}>
            <span></span>
          </a>
        </div>
        <div className="blog">
          <a href="//blog.redpelicans.com">
            <span className="glyphicon glyphicon-book"></span>
          </a>
        </div>
        <div className="contact">
          <a href="mailto:contact@redpelicans.com">
            <span className="glyphicon glyphicon-envelope"></span>
          </a>
        </div>
        <div className={`menu ${isMenuVisible ? 'active' : ''}`}>
          <nav role="navigation">
            <ul>
              <li>
                <Link onClick={toggleMenu} to="home" className={breadcrumbs === 'home' ? 'active' : ''}>
                  <span className="glyphicon glyphicon-home"></span>
                  { 'HOME' }
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="technologies" className={breadcrumbs === 'technologies' ? 'active' : ''}>
                  <span className="glyphicon glyphicon-cog"></span>
                  { 'TECHNOLOGIES' }
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="portfolio" className={breadcrumbs === 'portfolio' ? 'active' : ''}>
                  <span className="glyphicon glyphicon-briefcase"></span>
                  { 'PORTFOLIO' }
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <a href="//blog.redpelicans.com">
                  <span className="glyphicon glyphicon-book"></span>
                  { 'BLOG' }
                </a>
              </li>
            </ul>
          </nav>
          <div className="overlay" onClick={toggleMenu}></div>
        </div>
      </div>
    );
  }
}
Header.contextTypes = {
  breadcrumbs: PropTypes.string,
};
      
Header.propTypes = {
  isMenuVisible: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    isMenuVisible: state.menu.isVisible,
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
