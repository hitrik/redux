var path = require('path');
var webpack = require('webpack');
var NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './index'
  ],
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new NpmInstallPlugin()
  ],
  module: {

    loaders: [
      {
        loader: ['babel-loader'],
        test: /\.jsx?$/,
        plugins: ['transform-runtime'],
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};