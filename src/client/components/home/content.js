import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import '../../assets/styles/hexagon.css';

const linkFactory = (anchor, intlKey) => (
  <Link to={`technologies/${anchor}`}>
    <FormattedHTMLMessage id={intlKey} />
  </Link>
);

const FrontendSmXs = () => (
  <div>
    <h4><span className="glyphicon glyphicon-dashboard"></span></h4>
    <h3>{linkFactory('frontend', 'home.frontend.h')}</h3>
    <p>
      <FormattedMessage
        id="home.frontend.p"
        values={{
          angularjs: linkFactory('frontend', 'home.link.angularjs'),
          react: linkFactory('frontend', 'home.link.react'),
        }}
      />
    </p>
  </div>
);

const DatavisualisationSmXs = () => (
  <div>
    <h4><span className="glyphicon glyphicon-stats"></span></h4>
    <h3>{linkFactory('frontend', 'home.datavisualization.h')}</h3>
    <p>
      <FormattedHTMLMessage id="home.datavisualization.p1" />
      <FormattedMessage
        id="home.datavisualization.p2"
        values={{ d3: linkFactory('datavisualization', 'home.link.d3') }}
      />
    </p>
  </div>
);

const ConsultingSmXs = ({ isFat }) => (
  <div>
    <h4><span className="glyphicon glyphicon-send"></span></h4>
    <h3><FormattedHTMLMessage id="home.consulting.h" /></h3>
    <p>
      <FormattedMessage
        id="home.consulting.p1"
        values={{ fullstackjs: linkFactory('full-stack-javascript', 'home.link.fullstackjs') }}
      />
    </p>
  </div>
);

const BackendSmXs = () => (
  <div className="fat">
    <h4><span className="glyphicon glyphicon-hdd"></span></h4>
    <h3>{linkFactory('backend', 'home.backend.h')}</h3>
    <p>
      <FormattedMessage
        id="home.backend.p"
        values={{ nodejs: linkFactory('backend', 'home.link.nodejs') }}
      />
    </p>
  </div>
);

const NosqlSmXs = () => (
  <div>
    <h4><span className="glyphicon glyphicon-leaf"></span></h4>
    <h3>{linkFactory('nosql', 'home.nosql.h')}</h3>
    <p>
      <FormattedMessage
        id="home.nosql.p"
        values={{ mongodb: linkFactory('nosql', 'home.link.mongodb') }}
      />
    </p>
  </div>
);

const HexLgMd = ({ col = 3, theme, children }) => (
  <div className={`col-lg-${col} col-md-${col}`}>
    <div className={`hexagon ${theme}`}>
      <div className="hexin">
        {children}
      </div>
    </div>
  </div>
);

const Content = () => (
  <div className="content">
    <div className="container hidden-xs hidden-sm">
      <div className="row">
        <HexLgMd theme="partial-dark-grey">
          <FormattedMessage
              id="home.frontend.p"
              values={{
                angularjs: linkFactory('frontend', 'home.link.angularjs'),
                react: linkFactory('frontend', 'home.link.react'),
              }}
            />
        </HexLgMd>
        <HexLgMd theme="full-dark-grey">
          <h4><span className="glyphicon glyphicon-dashboard"></span></h4>
          <h3>{linkFactory('frontend', 'home.frontend.h')}</h3>
        </HexLgMd>
        <HexLgMd theme="full-dark-grey">
          <h4><span className="glyphicon glyphicon-stats"></span></h4>
          <h3>{linkFactory('datavisualization', 'home.datavisualization.h')}</h3>
        </HexLgMd>
        <HexLgMd theme="partial-dark-grey">
          <FormattedHTMLMessage id="home.datavisualization.p1" />
          <FormattedMessage
            id="home.datavisualization.p2"
            values={{ d3: linkFactory('datavisualization', 'home.link.d3') }}
          />
        </HexLgMd>
      </div>
      <div className="row">
        <div className="col-lg-9 col-md-9 center-block">
          <div className="row hexrow">
            <HexLgMd col="4" theme="partial-red">
              <FormattedMessage
                id="home.consulting.p1"
                values={{ fullstackjs: linkFactory('full-stack-javascript', 'home.link.fullstackjs')}}
              />
            </HexLgMd>
            <HexLgMd col="4" theme="full-red">
              <h4><span className="glyphicon glyphicon-send"></span></h4>
              <h3><FormattedHTMLMessage id="home.consulting.h" /></h3>
            </HexLgMd>
            <HexLgMd col="4" theme="partial-red">
              <FormattedHTMLMessage id="home.consulting.p2" />
            </HexLgMd>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="row hexrow">
            <HexLgMd theme="partial-dark-grey">
              <FormattedMessage
                id="home.backend.p"
                values={{ nodejs: linkFactory('backend', 'home.link.nodejs') }}
              />
            </HexLgMd>
            <HexLgMd theme="full-dark-grey">
                <h4><span className="glyphicon glyphicon-hdd"></span></h4>
                <h3>{linkFactory('backend', 'home.backend.h')}</h3>
            </HexLgMd>
            <HexLgMd theme="full-dark-grey">
                <h4><span className="glyphicon glyphicon-leaf"></span></h4>
                <h3>{linkFactory('nosql', 'home.nosql.h')}</h3>
            </HexLgMd>
            <HexLgMd theme="partial-dark-grey">
              <FormattedMessage
                id="home.nosql.p"
                values={{ mongodb: linkFactory('nosql', 'home.link.mongodb') }}
              />
            </HexLgMd>
          </div>
        </div>
      </div>
    </div>
    <div className="container visible-sm">
      <div className="row">
        <div className="col-sm-5 col-sm-offset-1">
          <div className="big hexagon full-dark-grey">
            <div className="hexin">
              <FrontendSmXs />
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="big hexagon full-dark-grey">
            <div className="hexin">
              <DatavisualisationSmXs />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-5 center-block">
          <div className="row big hexrow">
            <div className="col-sm-12">
              <div className="big hexagon full-red">
                <div className="hexin">
                  <ConsultingSmXs />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 center-block">
          <div className="row big hexrow">
            <div className="col-sm-5 col-sm-offset-1">
              <div className="big hexagon full-dark-grey">
                <div className="hexin">
                  <BackendSmXs />
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="big hexagon full-dark-grey">
                <div className="hexin">
                  <NosqlSmXs />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container visible-xs">
      <div className="smallcontainer">
        <div className="big hexagon full-dark-grey">
          <div className="hexin">
            <FrontendSmXs />
          </div>
        </div>
        <div className="big hexagon full-dark-grey">
          <div className="hexin">
            <DatavisualisationSmXs />
          </div>
        </div>
        <div className="big hexagon full-red">
          <div className="hexin">
            <ConsultingSmXs />
          </div>
        </div>
        <div className="big hexagon full-dark-grey">
          <div className="hexin">
            <BackendSmXs />
          </div>
        </div>
        <div className="big hexagon full-dark-grey">
          <div className="hexin">
            <NosqlSmXs />
          </div>
        </div>
      </div>
    </div>
  </div>
);

/*const Content = () => (
  <div className="content">
    <div className="container hidden-xs hidden-sm">
      <div className="row">
        <div className="col-lg-3 col-md-3 hex partial-dark-grey">
          <div>
            <p>
              <FormattedMessage
                id="home.frontend.p"
                values={{
                  angularjs: linkFactory('frontend', 'home.link.angularjs'),
                  react: linkFactory('frontend', 'home.link.react'),
                }}
              />
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 hex full-dark-grey">
          <div>
            <h4><span className="glyphicon glyphicon-dashboard"></span></h4>
            <h3>{linkFactory('frontend', 'home.frontend.h')}</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 hex full-dark-grey">
          <div>
            <h4><span className="glyphicon glyphicon-stats"></span></h4>
            <h3>{linkFactory('datavisualization', 'home.datavisualization.h')}</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 hex partial-dark-grey">
          <div>
            <p>
              <FormattedHTMLMessage id="home.datavisualization.p1" />
              <FormattedMessage
                id="home.datavisualization.p2"
                values={{
                  d3: linkFactory('datavisualization', 'home.link.d3'),
                }}
              />
            </p>
          </div>
        </div>
      </div>
      <div className="center-row">
        <div className="row">
          <div className="col-lg-9 col-md-9 center-block">
            <div className="row">
              <div className="col-lg-4 col-md-4 hex partial-red">
                <div>
                  <p>
                    <FormattedMessage
                      id="home.consulting.p1"
                      values={{
                        fullstackjs: linkFactory('full-stack-javascript', 'home.link.fullstackjs'),
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 hex full-red">
                <div>
                  <h4><span className="glyphicon glyphicon-send"></span></h4>
                  <h3><FormattedHTMLMessage id="home.consulting.h" /></h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 hex partial-red">
                <div>
                  <p>
                    <FormattedHTMLMessage id="home.consulting.p2" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-3 hex partial-dark-grey">
          <div>
            <p>
              <FormattedMessage
                id="home.backend.p"
                values={{
                  nodejs: linkFactory('backend', 'home.link.nodejs'),
                }}
              />
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 hex full-dark-grey">
          <div>
            <h4><span className="glyphicon glyphicon-hdd"></span></h4>
            <h3>{linkFactory('backend', 'home.backend.h')}</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 hex full-dark-grey">
          <div>
            <h4><span className="glyphicon glyphicon-leaf"></span></h4>
            <h3>{linkFactory('nosql', 'home.nosql.h')}</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 hex partial-dark-grey">
          <div>
            <p>
              <FormattedMessage
                id="home.nosql.p"
                values={{
                  mongodb: linkFactory('nosql', 'home.link.mongodb'),
                }}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container visible-sm">
      <div className="row">
        <div className="col-sm-5 col-sm-offset-1 hex full-dark-grey">
          <FrontendSmXs />
        </div>
        <div className="col-sm-5 hex full-dark-grey">
          <DatavisualisationSmXs />
        </div>
      </div>
      <div className="center-row">
        <div className="row">
          <div className="col-sm-5 center-block">
            <div className="row">
              <div className="col-sm-12 hex full-red">
                <ConsultingSmXs />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-5 col-sm-offset-1 hex full-dark-grey">
          <BackendSmXs />
        </div>
        <div className="col-sm-5 hex full-dark-grey">
          <NosqlSmXs />
        </div>
      </div>
    </div>
    <div className="container visible-xs">
      <div className="row">
        <div className="col-xs-12 center-block hex full-dark-grey">
          <FrontendSmXs />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 center-block hex full-dark-grey">
          <DatavisualisationSmXs />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 center-block hex full-red">
          <ConsultingSmXs isFat />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 center-block hex full-dark-grey">
          <BackendSmXs />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 center-block hex full-dark-grey">
          <NosqlSmXs />
        </div>
      </div>
    </div>
  </div>
);*/

export default Content;
