const path = require('path');

module.exports = {
  public: {
    path: path.join(__dirname, '../public'),
  },
  server: {
    host: '0.0.0.0',
    port: 5555, 
  },
};
