import React, { Component } from 'react';
import { Link } from 'react-router';
import './header.less';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
      activeMenu: props.location.pathname === '/' ? 'home' : props.location.pathname
    };
  }

  toggleMenu = (event) => {
    event.preventDefault();
    this.setState({isMenuVisible: !this.state.isMenuVisible});
  }

  render() {
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
          { this.state.activeMenu }
        </div>
        <div className={`toggle ${this.state.isMenuVisible ? 'active' : ''}`}>
          <a onClick={this.toggleMenu}>
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
        <div className={`menu ${this.state.isMenuVisible ? 'active' : ''}`}>
          <nav role="navigation">
            <ul>
              <li>
                <Link to="home" className={this.state.activeMenu === 'home' ? 'active' : ''}>
                  <span className="glyphicon glyphicon-home"></span>
                  { 'HOME' }
                </Link>
              </li>
              <li>
                <Link to="technologies" className={this.state.activeMenu === 'technologies' ? 'active' : ''}>
                  <span className="glyphicon glyphicon-cog"></span>
                  { 'TECHNOLOGIES' }
                </Link>
              </li>
              <li>
                <Link to="portfolio" className={this.state.activeMenu === 'portfolio' ? 'active' : ''}>
                  <span className="glyphicon glyphicon-briefcase"></span>
                  { 'PORTFOLIO' }
                </Link>
              </li>
              <li>
                <a href="//blog.redpelicans.com">
                  <span className="glyphicon glyphicon-book"></span>
                  { 'BLOG' }
                </a>
              </li>
            </ul>
          </nav>
          <div className="overlay" onClick={this.toggleMenu}></div>
        </div>
      </div>
    );
  }
};

export default Header;