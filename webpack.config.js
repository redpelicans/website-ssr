const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const package = require('./package.json');
const config = require('./config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = {
  devtool: config.devtool,
  devServer: config.devServer,
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist'),
    publicPath: `/dist/`,
  },
  entry: {
    app: './src/app.js',
    vendor: ['ramda', 'react', 'react-dom'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: path.resolve('./node_modules'),
        query: package.babel,
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
      },
    ],
  },
  postcss: () => autoprefixer({ browsers: ['last 2 versions'] }),
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  stats: {
    assets: true,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
    children: false,
  },
};

if (config.hotReload) {
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = webpackConfig;

