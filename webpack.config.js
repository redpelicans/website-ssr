const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const package = require('./package.json');
const config = require('./config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const getPostcssPlugins = () => [ autoprefixer({ browsers : ['last 2 versions'] }) ];

const webpackConfig = {
  devtool: config.devtool,
  devServer: config.devServer || {},
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist'),
    publicPath: `/dist/`,
  },
  entry: {
    app: './src/client/index.js',
    vendor: ['ramda', 'react', 'react-dom', 'react-router', 'react-redux', 'redux'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: package.babel,
        query: {
          // to be checked
          cacheDirectory: true,
        }
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [ 
            'css-loader', 
            { 
              loader: 'postcss-loader',
              options: getPostcssPlugins()
            }
          ]
        })
      },

      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [ 
            'css-loader', 
            {
              loader: 'postcss-loader', 
              options: getPostcssPlugins(),
            },
            'less-loader',
          ],
        })
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          type: 'application/font-woff'
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        loader: 'url-loader',
        query: {
          limit: 100000
        }
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
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

