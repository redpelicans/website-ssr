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
    app: './src/client/index.js',
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
        test: /\.less$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        loader: 'url-loader?limit=100000'
      }
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

