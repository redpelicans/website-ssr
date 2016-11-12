module.exports = {
  hotReload: true,
  devtool: 'eval-source-map',
  devServer: {
    // contentBase: config.webpack.paths.build,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/index.html': {
        target: 'http://172.22.0.2:5555 ',
        secure: false
      }
    }
  },
}

