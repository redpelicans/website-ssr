import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import NVD3Chart from 'react-nvd3';

const performanceData = [
  { key: 'data', values: [
    { label: 'Chrome 23.0.1271.91', value: 3488.7 },
    { label: 'Chrome 21.0.1189.89', value: 3519.4 },
    { label: 'Chrome 22.0.1229.94', value: 3582.8 },
    { label: 'Chrome 24.0.1312.14', value: 3583.2 },
    { label: 'Chrome 19.0.1084.56', value: 3758.9 },
    { label: 'Firefox 18.0b1',      value: 3895.2 },
    { label: 'Firefox 18.0a',       value: 4099.6 },
    { label: 'Chrome 18.01025.168', value: 4107.6 },
    { label: 'Chrome 17.0.963.83',  value: 4352.9 },
    { label: 'Firefox 10.0.7',      value: 4600.7 },
    { label: 'Chrome 15.0.874.121', value: 4753.8 },
    { label: 'Firefox 17.0',        value: 4829.6 },
    { label: 'Chrome 16.0.912.77',  value: 4857.7 },
    { label: 'Firefox 16.0b3',      value: 4884.6 },
    { label: 'Firefox 15.0.1',      value: 4930.1 },
    { label: 'Firefox 9.0.1',       value: 5039.7 },
    { label: 'Firefox 11.0',        value: 5114.7 },
    { label: 'Chrome 14.0.835.202', value: 5120.4 },
    { label: 'Firefox 14.0.1',      value: 5350.3 },
    { label: 'Firefox 12.0',        value: 5380.6 },
    { label: 'Firefox 13.0.1',      value: 5452.3 },
    { label: 'Chrome 10.0.648.151', value: 5838.4 },
    { label: 'Chrome 11.0.696.77',  value: 5886.4 },
    { label: 'Firefox 8.0.1',       value: 6883.0 },
    { label: 'Firefox 7.0.1',       value: 6981.7 },
    { label: 'Firefox 6.0.2',       value: 7351.9 },
    { label: 'Firefox 4.0.1',       value: 7509.8 },
    { label: 'Firefox 5.0.1',       value: 7973.9 },    
    { label: 'Chrome 12.0.742.112', value: 9300.0 },
    { label: 'Chrome 13.0.782.99',  value: 9362.7 },
    { label: 'Opera 12.11',         value: 12418.1 },
    { label: 'Opera 12.02',         value: 12774.9 },
    { label: 'Opera 12.12',         value: 12793.8 },
    { label: 'Opera 11.64',         value: 12949.2 },
    { label: 'Opera 11.11',         value: 13490.4 },
    { label: 'Opera 10.63',         value: 13535.8 },
    { label: 'Chrome 8.0.552.237',  value: 14434.6 },
    { label: 'Chrome 9.0.597.107',  value: 14471.1 }, 
    { label: 'Safari 5.17',         value: 14750.3 }, 
    { label: 'Chrome 7.0.517.44',   value: 15186.9 },    
    { label: 'Chrome 6.0.453.1',    value: 17277.1 },
    { label: 'Chrome 5.0.375.126',  value: 17980.7 },
    { label: 'Safari 5.05',         value: 18211.7 },
    { label: 'Safari 4.05',         value: 21183.7 },
    { label: 'Chrome 4.0.223',      value: 23142.2 },
    { label: 'Firefox 3.6.28',      value: 25075.7 },
    { label: 'Chrome 3.0.182',      value: 27886.5 },
    { label: 'Firefox 3.5.19',      value: 28835.3 }
  ]}
];

const ecosystemData = [
  {
    key: 'Javascript', values: [
      { label: 2008, value: 2060 },
      { label: 2009, value: 8119 },
      { label: 2010, value: 23095 },
      { label: 2011, value: 60754 },
      { label: 2012, value: 156521 },
      { label: 2013, value: 327467 },
      { label: 2014, value: 487971 }
    ]
  },
  {key: 'Java', values: [[2008,596],[2009,4157],[2010,14342],[2011,46227],[2012,111277],[2013,230600],[2014,394101]]},
  {key: 'Ruby', values: [[2008,7992],[2009,17717],[2010,31661],[2011,70541],[2012,125652],[2013,212310],[2014,275484]]},
  {key: 'Python', values: [[2008,1497],[2009,7670],[2010,18028],[2011,40917],[2012,79114],[2013,146274],[2014,225141]]},
  {key: 'PHP', values: [[2008,782],[2009,4529],[2010,14361],[2011,37150],[2012,78320],[2013,150619],[2014,224670]]},
  {key: 'C++', values: [[2008,544],[2009,2755],[2010,6543],[2011,17530],[2012,39759],[2013,81579],[2014,125229]]},
  {key: 'C', values: [[2008,936],[2009,4454],[2010,9940],[2011,21692],[2012,41240],[2013,75632],[2014,113556]]},
  {key: 'Obj-C', values: [[2008,312],[2009,1771],[2010,3779],[2011,10449],[2012,25676],[2013,51792],[2014,86268]]}
]

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
            {/*<div className="rp-multi-bar-horizontal-chart">
              <NVD3Chart
                type="multiBarHorizontalChart"
                datum={performanceData}
                x="label"
                y="value"
                showControls={false}
                showXAxis
                showYAxis={false}
                showLegend={false}
                tooltip={{enabled: false}}
                height={400}
                margin={{left:100,top:20,bottom:0,right:0}}
              />
            </div>*/}
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
            {/*<div className="rp-nvd3-line-chart">
              <NVD3Chart
                type="lineChart"
                datum={ecosystemData}
                x="label"
                y="value"
                showControls={false}
                showXAxis={true}
                showYAxis={true}
                showLegend={true}
                tooltip={{enabled: false}}
                height={400}
                interpolate="monotone"
                margin={{left:100,top:20,bottom:0,right:0}}
              />
            </div>*/}
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
