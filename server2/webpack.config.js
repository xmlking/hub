let path = require('path');
const { GlobCopyWebpackPlugin } = require('@angular/cli/plugins/webpack');

module.exports = {
  devtool: false,

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.ts', '.js'],
    alias: {
      // FIXME: Module not found: Error: Can't resolve 'socket.io-client/package' in '/Developer/Work/iot/hub/server2/node_modules/socket.io/lib'
      // "socket.io-client/package": "empty-module",
      "hiredis": "empty-module",
    }
  },

  target: 'node',

  resolveLoader: {
    modules: [
      'node_modules'
    ]
  },

  entry: {
    main: './src/index',
    vendor: [
      'nest.js',
      'rxjs'
    ]
  },

  output: {
    path: path.resolve(__dirname, './dist/build'),
    filename: '[name].server.bundle.js',
    chunkFilename: "[id].server.chunk.js"
  },

  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.(eot|svg)$/, loader: 'file-loader?name=[name].[hash:20].[ext]' },
      { test: /\.js.map/, loader: 'raw-loader' },
    ]
  },

  "plugins": [
    new GlobCopyWebpackPlugin({
      "patterns": [
        "config",
        "data"
      ],
      "globOptions": {
        "cwd": "./",
        "dot": true,
        "ignore": "**/.gitkeep"
      }
    }),
  ]
};
