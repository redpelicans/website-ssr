const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack-config-common');
const config = require('./package.json');

module.exports = merge(common, {
  //devtool: 'cheap-module-source-map',
  entry: {
    [config.webpack.name]: path.resolve(config.webpack.paths.src, config.webpack.name),
    [config.webpack.vendor]: config.webpack.vendors
  },
  output: {
    path: config.webpack.paths.dist,
    filename: `${config.webpack.name}.js`,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(config.webpack.vendor, `${config.webpack.vendor}.js`),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  ]
});
