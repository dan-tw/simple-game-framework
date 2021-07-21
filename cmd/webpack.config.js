const path = require('path');
const dist = path.resolve(__dirname.replace(/cmd/,""), "www/dist");

module.exports = {
  entry: './src/client.ts',
  output: {
    path: dist,
    filename: 'main.js'
  },
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      path.resolve('src'),
      'node_modules'
    ]
  },
  mode: 'development',
  module: {
    rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: "ts-loader" }
      ]
  }
};