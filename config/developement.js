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
    // proxy: {
    //   '**': {
    //     target: 'http://0.0.0.0:5555 ',
    //     secure: false,
    //     bypass: function(req, res, proxyOptions) {
    //       if (req.url === '/client') return '/public/index.html';
    //     },
    //   }
    // }
  },
}

