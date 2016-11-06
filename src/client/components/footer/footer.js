import React from 'react';
import './footer.less';

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="container text-center">
          <p>
            <span>{ 'FOOTER.COPYRIGHT' }</span>
            &nbsp;&nbsp;<span className="glyphicon glyphicon-send" />&nbsp;&nbsp;
            <span>{ 'FOOTER.RIGHTS' }</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
