const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ], exclude: /node_modules/ }, // style loader -> inject style tag, css-loader -> doing css, sass-loader -> convert sass to css
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};