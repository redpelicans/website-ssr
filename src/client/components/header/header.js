import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { toggleMenu } from '../../actions';
import './header.less';

const Header = ({ isMenuVisible, currentPage, toggleMenu }) => (
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
      { currentPage }
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
            <Link onClick={toggleMenu} to="home" className={currentPage === 'home' ? 'active' : ''}>
              <span className="glyphicon glyphicon-home"></span>
              { 'HOME' }
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="technologies" className={currentPage === 'technologies' ? 'active' : ''}>
              <span className="glyphicon glyphicon-cog"></span>
              { 'TECHNOLOGIES' }
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="portfolio" className={currentPage === 'portfolio' ? 'active' : ''}>
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

Header.propTypes = {
  currentPage: PropTypes.string,
  isMenuVisible: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage.name,
    isMenuVisible: state.menu.isVisible,
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
