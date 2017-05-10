const path = require('path');
const R = require('ramda');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const package = require('./package.json');
const config = require('./config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const getPostcssPlugins = () => [ autoprefixer({ browsers : ['last 2 versions'] }) ];
const isProd = () => 'production' === JSON.stringify(process.env.NODE_ENV);
const isDev = () => 'development' === JSON.stringify(process.env.NODE_ENV);
const ifProd = (plugin) => isProd() ? plugin : null;
const ifDev = (plugin) => isDev() ? plugin : null;
const compact = R.filter((x) => !R.isNil(x));

const webpackConfig = {
  devtool: config.devtool,
  devServer: config.devServer || {},
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/build'),
    publicPath: `/build/`,
  },
  entry: {
    app: './src/client/index.js',
    vendor: ['react-transition-group', 'preact', 'preact-compat', 'react', 'react-dom', 'react-router', 'react-router-dom', 'react-intl', 'react-headrooms', 'd3', 'react-nvd3', 'react-scroll'],
  },
  resolve: {
    alias: {
      react: "preact-compat",
      'react-dom': "preact-compat",
      //'react-addons-transition-group': 'preact-transition-group',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
        }
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader', 'postcss-loader', 'less-loader'],
        })
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
      },
      {
        test: /\.(gif|png|jpe?g|ico)$/,
        use: 'url-loader',
      }
    ],
  },
  plugins: compact([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    //ifProd(new webpack.optimize.DedupePlugin()),
    ifDev(new webpack.HotModuleReplacementPlugin()),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      // minChunks: Infinity,
      //filename: '[name].[hash].js',
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
    }),
  ]),
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

module.exports = webpackConfig;

