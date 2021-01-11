const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', 'src/index'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/',
    filename: 'kybutler.js',
  },
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx', '.css'],
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpe?g|gif)$/i, loader: 'file-loader' },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/assets/images/favicon.png',
      template: './src/index.html',
    }),
  ],
  optimization: {
    minimize: true,
    noEmitOnErrors: true,
  },
};