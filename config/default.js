const path = require('path');

module.exports = {
  justSSR: false,
  compress: true,
  public: {
    path: path.join(__dirname, '../public'),
  },
  dist: {
    path: path.join(__dirname, '../dist'),
  },
  server: {
    host: '0.0.0.0',
    port: 5555, 
  },
};
