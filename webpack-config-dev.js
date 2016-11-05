const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack-config-common');
const config = require('./package.json');

module.exports = merge(common, {
  devtool: 'eval-source-map',
  entry: path.resolve(config.webpack.paths.src, config.webpack.name),
  output: {
    path: config.webpack.build,
    filename: `${config.webpack.name}.js`
  },
  devServer: {
    contentBase: config.webpack.paths.build,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || '3000'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    }),
  ]
});
