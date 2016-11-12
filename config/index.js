const R = require('ramda');
const defaultConfig = require('./default');
const supportedModes = { 
  developement: require('./developement'), 
  production: require('./production'), 
  testing: require('./testing') 
};
const config = supportedModes[process.env.NODE_ENV];
module.exports = R.merge(defaultConfig, config || {});
