import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

const Javascript1 = () => (
  <div className="javascript1 slide">
    <div className="container">
      <div className="strip top">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
            <h1><FormattedHTMLMessage id="technologies.javascript1.h1" /></h1>
            <p><FormattedHTMLMessage id="technologies.javascript1.p1" /></p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="head">
            <span className="glyphicon glyphicon-signal"></span>
          </div>
          <div className="body">
            <h3><FormattedHTMLMessage id="technologies.javascript1.content.h1" /></h3>
            <p><FormattedHTMLMessage id="technologies.javascript1.content.p1" /></p>
            <span><FormattedHTMLMessage id="technologies.javascript1.content.s1" /></span>
            {/*<nvd3-multi-bar-horizontal-chart
              className="rp-multi-bar-horizontal-chart"
              data="performance.data"
              xAxisTickFormat="performance.xAxisTickFormat()"
              yAxisTickFormat="performance.yAxisTickFormat()"
              color="performance.color()"
              showXAxis="true"
              showYAxis="false"
              height="400"
              margin="{left:120,top:0,bottom:0,right:0}">
            </nvd3-multi-bar-horizontal-chart>*/}
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="head">
            <span className="glyphicon glyphicon-globe"></span>
          </div>
          <div className="body">
            <h3><FormattedHTMLMessage id="technologies.javascript1.content.h2" /></h3>
            <p><FormattedHTMLMessage id="technologies.javascript1.content.p2" /></p>
            <span><FormattedHTMLMessage id="technologies.javascript1.content.s2" /></span>
            {/*<nvd3-line-chart
              className="rp-nvd3-line-chart"
              data="ecosystem.data"
              xAxisTickFormat="ecosystem.xAxisTickFormat()"
              yAxisTickFormat="ecosystem.yAxisTickFormat()"
              showXAxis="true"
              showYAxis="true"
              height="400"
              margin="{left:25,top:0,bottom:14,right:12}"
              showLegend="true"
              interpolate="monotone">
            </nvd3-line-chart>*/}
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="head">
            <span className="glyphicon glyphicon-heart"></span>
          </div>
          <div className="body">
            <h3><FormattedHTMLMessage id="technologies.javascript1.content.h3" /></h3>
            <p><FormattedHTMLMessage id="technologies.javascript1.content.p3" /></p>
            <span><FormattedHTMLMessage id="technologies.javascript1.content.s3" /></span>
            {/*<nvd3-line-chart
              className="rp-nvd3-line-chart"
              data="adoption.data"
              xAxisTickFormat="adoption.xAxisTickFormat()"
              yAxisTickFormat="adoption.yAxisTickFormat()"
              showXAxis="true"
              showYAxis="true"
              height="400"
              margin="{left:25,top:0,bottom:14,right:12}"
              showLegend="true"
              interpolate="monotone">
            </nvd3-line-chart>*/}
          </div>
        </div>
      </div>
      <div className="strip bottom">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
            <p><FormattedHTMLMessage id="technologies.javascript1.h2" /></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Javascript1;
