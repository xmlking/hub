let path = require('path');

module.exports = {

  entry: {
    main: './src/index',
    vendor: [
      'koa',
      'routing-controllers',
      'socket-controllers',
      'typedi',
      'express'
    ]
  },

  output: {
    path: path.resolve(__dirname, './dist/build'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.ts', '.js']
  },
  target: "node",
  devtool: false
}
