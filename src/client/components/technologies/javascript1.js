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

const adoption = {
  data: [
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
    {
      key: 'Java', values: [
        { label: 2008, value: 596 },
        { label: 2009, value: 4157 },
        { label: 2010, value: 14342 },
        { label: 2011, value: 46227 },
        { label: 2012, value: 111277 },
        { label: 2013, value: 230600 },
        { label: 2014, value: 394101 }
      ]
    },
    {
      key: 'Ruby', values: [
        { label: 2008, value: 7992 },
        { label: 2009, value: 17717 },
        { label: 2010, value: 31661 },
        { label: 2011, value: 70541 },
        { label: 2012, value: 125652 },
        { label: 2013, value: 212310 },
        { label: 2014, value: 275484 }
      ]
    },
    {
      key: 'Python', values: [
        { label: 2008, value: 1497 },
        { label: 2009, value: 7670 },
        { label: 2010, value: 18028 },
        { label: 2011, value: 40917 },
        { label: 2012, value: 79114 },
        { label: 2013, value: 146274 },
        { label: 2014, value: 225141 }
      ]
    },
    {
      key: 'PHP', values: [
        { label: 2008, value: 782 },
        { label: 2009, value: 4529 },
        { label: 2010, value: 14361 },
        { label: 2011, value: 37150 },
        { label: 2012, value: 78320 },
        { label: 2013, value: 150619 },
        { label: 2014, value: 224670 }
      ]
    },
    {
      key: 'C++', values: [
        { label: 2008, value: 544 },
        { label: 2009, value: 2755 },
        { label: 2010, value: 6543 },
        { label: 2011, value: 17530 },
        { label: 2012, value: 39759 },
        { label: 2013, value: 81579 },
        { label: 2014, value: 125229 }
      ]
    },
    {
      key: 'C', values: [
        { label: 2008, value: 936 },
        { label: 2009, value: 4454 },
        { label: 2010, value: 9940 },
        { label: 2011, value: 21692 },
        { label: 2012, value: 41240 },
        { label: 2013, value: 75632 },
        { label: 2014, value: 113556 }
      ]
    },
    {
      key: 'Obj-C', values: [
        { label: 2008, value: 312 },
        { label: 2009, value: 1771 },
        { label: 2010, value: 3779 },
        { label: 2011, value: 10449 },
        { label: 2012, value: 25676 },
        { label: 2013, value: 51792 },
        { label: 2014, value: 86268 }
      ]
    }
  ],
  xAxis: { tickFormat: (d, i) => d, ticks: 4 },
  yAxis: { tickFormat: (d, i) => parseInt(d/1000)+'k', ticks: 12 }
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const ecosystem = {
  data: [
    { key: 'npm (Javascript)'
    , values: [
      { label: 1327968000, value: 6788  },
      { label: 1330473600, value: 7603  },
      { label: 1333152000, value: 8415  },
      { label: 1335744000, value: 9429  },
      { label: 1338422400, value: 10463 },
      { label: 1341014400, value: 11499 },
      { label: 1343692800, value: 12659 },
      { label: 1346371200, value: 14013 },
      { label: 1348963200, value: 15335 },
      { label: 1351641600, value: 16849 },
      { label: 1354233600, value: 18478 },
      { label: 1356912000, value: 19984 },
      { label: 1359590400, value: 22021 },
      { label: 1362009600, value: 23863 },
      { label: 1364688000, value: 26400 },
      { label: 1367280000, value: 28841 },
      { label: 1369958400, value: 31246 },
      { label: 1372550400, value: 33761 },
      { label: 1375228800, value: 36617 },
      { label: 1377907200, value: 39467 },
      { label: 1380499200, value: 42510 },
      { label: 1383177600, value: 45780 },
      { label: 1385769600, value: 49223 },
      { label: 1388448000, value: 52888 },
      { label: 1391126400, value: 57172 },
      { label: 1393545600, value: 61526 },
      { label: 1396224000, value: 66670 },
      { label: 1398816000, value: 70682 },
      { label: 1401494400, value: 75998 },
      { label: 1403568000, value: 79965 },
      ]
    }
  , { key: 'Maven Central (Java)'
    , values: [
      { label: 1327968000, value: null  },
      { label: 1330473600, value: null  },
      { label: 1333152000, value: null  },
      { label: 1335744000, value: null  },
      { label: 1338422400, value: null  },
      { label: 1341014400, value: null  },
      { label: 1343692800, value: null  },
      { label: 1346371200, value: null  },
      { label: 1348963200, value: null  },
      { label: 1351641600, value: null  },
      { label: 1354233600, value: null  },
      { label: 1356912000, value: null  },
      { label: 1359590400, value: null  },
      { label: 1362009600, value: null  },
      { label: 1364688000, value: 55805 },
      { label: 1367280000, value: 57406 },
      { label: 1369958400, value: 58726 },
      { label: 1372550400, value: 60576 },
      { label: 1375228800, value: 62044 },
      { label: 1377907200, value: 63318 },
      { label: 1380499200, value: 64585 },
      { label: 1383177600, value: 66141 },
      { label: 1385769600, value: 67732 },
      { label: 1388448000, value: 69087 },
      { label: 1391126400, value: 70419 },
      { label: 1393545600, value: 71815 },
      { label: 1396224000, value: 74161 },
      { label: 1398816000, value: 76672 },
      { label: 1401494400, value: 78933 },
      { label: 1403568000, value: 80506 },
      ]
    }
  , { key: 'Rubygems (Ruby)'
    , values: [
      { label: 1327968000, value: 33582 },
      { label: 1330473600, value: 35036 },
      { label: 1333152000, value: 36561 },
      { label: 1335744000, value: 38010 },
      { label: 1338422400, value: 39494 },
      { label: 1341014400, value: 40832 },
      { label: 1343692800, value: 42207 },
      { label: 1346371200, value: 43556 },
      { label: 1348963200, value: 44826 },
      { label: 1351641600, value: 46276 },
      { label: 1354233600, value: 47768 },
      { label: 1356912000, value: 49135 },
      { label: 1359590400, value: 50664 },
      { label: 1362009600, value: 52182 },
      { label: 1364688000, value: 53944 },
      { label: 1367280000, value: 55709 },
      { label: 1369958400, value: 57369 },
      { label: 1372550400, value: 58783 },
      { label: 1375228800, value: 60380 },
      { label: 1377907200, value: 61988 },
      { label: 1380499200, value: 63412 },
      { label: 1383177600, value: 65158 },
      { label: 1385769600, value: 66718 },
      { label: 1388448000, value: 68210 },
      { label: 1391126400, value: 69748 },
      { label: 1393545600, value: 71389 },
      { label: 1396224000, value: 73020 },
      { label: 1398816000, value: 74691 },
      { label: 1401494400, value: 76282 },
      { label: 1403568000, value: 77517 },
      ]
    }
  , { key: 'PyPI (Python)'
    , values: [
      { label: 1327968000, value: 18865 },
      { label: 1330473600, value: 19429 },
      { label: 1333152000, value: 20180 },
      { label: 1335744000, value: 20629 },
      { label: 1338422400, value: 21329 },
      { label: 1341014400, value: 22042 },
      { label: 1343692800, value: 22820 },
      { label: 1346371200, value: 23589 },
      { label: 1348963200, value: 24343 },
      { label: 1351641600, value: 25172 },
      { label: 1354233600, value: 26105 },
      { label: 1356912000, value: 26630 },
      { label: 1359590400, value: 27582 },
      { label: 1362009600, value: 28534 },
      { label: 1364688000, value: 29489 },
      { label: 1367280000, value: 30466 },
      { label: 1369958400, value: 31303 },
      { label: 1372550400, value: 32155 },
      { label: 1375228800, value: 33185 },
      { label: 1377907200, value: 34264 },
      { label: 1380499200, value: 35116 },
      { label: 1383177600, value: 36174 },
      { label: 1385769600, value: 37214 },
      { label: 1388448000, value: 38376 },
      { label: 1391126400, value: 39492 },
      { label: 1393545600, value: 40431 },
      { label: 1396224000, value: 41771 },
      { label: 1398816000, value: 43007 },
      { label: 1401494400, value: 44386 },
      { label: 1403568000, value: 45457 },
      ]
    }
  , { key: 'Packagist (PHP)'
    , values: [
      { label: 1327968000, value: null  },
      { label: 1330473600, value: null  },
      { label: 1333152000, value: null  },
      { label: 1335744000, value: null  },
      { label: 1338422400, value: null  },
      { label: 1341014400, value: null  },
      { label: 1343692800, value: null  },
      { label: 1346371200, value: null  },
      { label: 1348963200, value: null  },
      { label: 1351641600, value: null  },
      { label: 1354233600, value: null  },
      { label: 1356912000, value: null  },
      { label: 1359590400, value: null  },
      { label: 1362009600, value: 8016  },
      { label: 1364688000, value: 9170  },
      { label: 1367280000, value: 10295 },
      { label: 1369958400, value: 11434 },
      { label: 1372550400, value: 12613 },
      { label: 1375228800, value: 13971 },
      { label: 1377907200, value: 15220 },
      { label: 1380499200, value: 16671 },
      { label: 1383177600, value: 18212 },
      { label: 1385769600, value: 19742 },
      { label: 1388448000, value: 21389 },
      { label: 1391126400, value: 23193 },
      { label: 1393545600, value: 25005 },
      { label: 1396224000, value: 26953 },
      { label: 1398816000, value: 28884 },
      { label: 1401494400, value: 31035 },
      { label: 1403568000, value: 32495 },
      ]
    }
  , { key: 'nuget (.Net)'
    , values: [
      { label: 1327968000, value: null  },
      { label: 1330473600, value: 4830  },
      { label: 1333152000, value: 5294  },
      { label: 1335744000, value: 5690  },
      { label: 1338422400, value: 6096  },
      { label: 1341014400, value: 6509  },
      { label: 1343692800, value: 7030  },
      { label: 1346371200, value: 7643  },
      { label: 1348963200, value: 7997  },
      { label: 1351641600, value: 8470  },
      { label: 1354233600, value: 8889  },
      { label: 1356912000, value: 9450  },
      { label: 1359590400, value: 10017 },
      { label: 1362009600, value: 10801 },
      { label: 1364688000, value: 11429 },
      { label: 1367280000, value: 12101 },
      { label: 1369958400, value: 12626 },
      { label: 1372550400, value: 13238 },
      { label: 1375228800, value: 13969 },
      { label: 1377907200, value: 14665 },
      { label: 1380499200, value: 15494 },
      { label: 1383177600, value: 16585 },
      { label: 1385769600, value: 16999 },
      { label: 1388448000, value: 17653 },
      { label: 1391126400, value: 18456 },
      { label: 1393545600, value: 19327 },
      { label: 1396224000, value: 20303 },
      { label: 1398816000, value: 22187 },
      { label: 1401494400, value: 23402 },
      { label: 1403568000, value: 24054 },
      ]
    }
  , { key: 'CPAN (Perl)'
    , values: [
      { label: 1327968000, value: 24197 },
      { label: 1330473600, value: 24345 },
      { label: 1333152000, value: 24562 },
      { label: 1335744000, value: 24733 },
      { label: 1338422400, value: 24935 },
      { label: 1341014400, value: 25153 },
      { label: 1343692800, value: 25388 },
      { label: 1346371200, value: 25576 },
      { label: 1348963200, value: 25785 },
      { label: 1351641600, value: 26009 },
      { label: 1354233600, value: 26269 },
      { label: 1356912000, value: 26513 },
      { label: 1359590400, value: 26738 },
      { label: 1362009600, value: 26956 },
      { label: 1364688000, value: 27190 },
      { label: 1367280000, value: 27411 },
      { label: 1369958400, value: 27645 },
      { label: 1372550400, value: 27844 },
      { label: 1375228800, value: 28013 },
      { label: 1377907200, value: 28191 },
      { label: 1380499200, value: 28415 },
      { label: 1383177600, value: 28582 },
      { label: 1385769600, value: 28754 },
      { label: 1388448000, value: 28909 },
      { label: 1391126400, value: 29057 },
      { label: 1393545600, value: 29092 },
      { label: 1396224000, value: 29298 },
      { label: 1398816000, value: 29486 },
      { label: 1401494400, value: 29666 },
      { label: 1403568000, value: 29829 },
      ]
    }
  , { key: 'Hackage (Haskell)'
    , values: [
      { label: 1327968000, value: 3697 },
      { label: 1330473600, value: 3786 },
      { label: 1333152000, value: 3861 },
      { label: 1335744000, value: 3945 },
      { label: 1338422400, value: 4025 },
      { label: 1341014400, value: 4097 },
      { label: 1343692800, value: 4156 },
      { label: 1346371200, value: 4253 },
      { label: 1348963200, value: 4331 },
      { label: 1351641600, value: 4442 },
      { label: 1354233600, value: 4529 },
      { label: 1356912000, value: 4604 },
      { label: 1359590400, value: 4666 },
      { label: 1362009600, value: 4714 },
      { label: 1364688000, value: 4837 },
      { label: 1367280000, value: 4911 },
      { label: 1369958400, value: 4911 },
      { label: 1372550400, value: 5129 },
      { label: 1375228800, value: 5200 },
      { label: 1377907200, value: 5302 },
      { label: 1380499200, value: 5383 },
      { label: 1383177600, value: 5335 },
      { label: 1385769600, value: 5673 },
      { label: 1388448000, value: 5673 },
      { label: 1391126400, value: 5971 },
      { label: 1393545600, value: 6122 },
      { label: 1396224000, value: 6238 },
      { label: 1398816000, value: 6372 },
      { label: 1401494400, value: 6490 },
      { label: 1403568000, value: 6582 },
      ]
    }
  ],
  xAxis: {
    tickFormat: (d, i) => {
      const date = new Date(d*1000);
      return `${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
    },
    ticks: 4
  },
  yAxis: { tickFormat: (d, i) => parseInt(d/1000)+'k', ticks: 12 }
};

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
            <span className="red"><FormattedHTMLMessage id="technologies.javascript1.content.s1" /></span>
            <div className="rp-multi-bar-horizontal-chart">
              <NVD3Chart
                height={400}
                type="multiBarHorizontalChart"
                datum={performanceData}
                x="label"
                y="value"
                showControls={false}
                showXAxis
                showYAxis={false}
                showLegend={false}
                tooltip={{enabled: false}}
                margin={{left:100,top:20,bottom:0,right:0}}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="head">
            <span className="glyphicon glyphicon-globe"></span>
          </div>
          <div className="body">
            <h3><FormattedHTMLMessage id="technologies.javascript1.content.h2" /></h3>
            <p><FormattedHTMLMessage id="technologies.javascript1.content.p2" /></p>
            <span className="red"><FormattedHTMLMessage id="technologies.javascript1.content.s2" /></span>
            <div className="rp-nvd3-line-chart">
              <NVD3Chart
                height={400}
                type="lineChart"
                datum={ecosystem.data}
                x="label"
                y="value"
                xAxis={ecosystem.xAxis}
                yAxis={ecosystem.yAxis}
                showControls={false}
                showXAxis={true}
                showYAxis={true}
                showLegend={true}
                tooltip={{enabled: false}}
                interpolate="monotone"
                margin={{left:25,top:20,bottom:14,right:12}}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="head">
            <span className="glyphicon glyphicon-heart"></span>
          </div>
          <div className="body">
            <h3><FormattedHTMLMessage id="technologies.javascript1.content.h3" /></h3>
            <p><FormattedHTMLMessage id="technologies.javascript1.content.p3" /></p>
            <span className="red"><FormattedHTMLMessage id="technologies.javascript1.content.s3" /></span>
            <div className="rp-nvd3-line-chart">
              <NVD3Chart
                height={400}
                type="lineChart"
                datum={adoption.data}
                x="label"
                y="value"
                xAxis={adoption.xAxis}
                yAxis={adoption.yAxis}
                showControls={false}
                showXAxis={true}
                showYAxis={true}
                showLegend={true}
                tooltip={{enabled: false}}
                interpolate="monotone"
                margin={{left:25,top:20,bottom:14,right:12}}
              />
            </div>
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
