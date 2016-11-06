import React from 'react';
import './footer.less';
import mongoPartner from '../../assets/images/mongo-partner.png';

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="separator-grey">
            <span></span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container text-center">
          <img src={mongoPartner} />
        </div>
      </div>
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
