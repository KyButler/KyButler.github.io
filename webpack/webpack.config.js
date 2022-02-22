const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index',
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
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        },
      },
      {test: /\.css$/i, use: ['style-loader', 'css-loader']},
      {test: /\.(png|jpe?g|gif)$/i, use: 'file-loader'},
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
