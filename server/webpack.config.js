var path = require('path');
var webpack = require('webpack');
var node_externals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.ts',
  target: 'node',
  externals: [node_externals()],
  output: {
    path: path.resolve(__dirname, './bin'),
    publicPath: '/bin/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/, loader: 'ts-loader',
        exclude: /(node_modules|bower_components)/
      },
      {test: /\.json$/, loader: 'json'}
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  }
}
