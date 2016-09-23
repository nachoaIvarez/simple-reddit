/* eslint-disable import/no-extraneous-dependencies, global-require */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.[hash].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('app.[hash].css'),
    new HtmlwebpackPlugin({
      template: './index.html',
    }),
    new webpack.ProvidePlugin({ React: 'react' }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: '0.0.0.0',
    port: 3000,
  },
  module: {
    loaders: [
      // Javascript
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'app'),
      },

      // Base styles
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css!postcss'),
        include: path.join(__dirname, 'app/styles'),
      },

      // Component styles
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'css' +
            '?modules' +
            '&importLoaders=1' +
            '&localIdentName=[hash:base64:5]' +
          '!postcss'
        ),
        include: path.join(__dirname, 'app/components'),
      },

      // Vendor styles
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css'),
        include: path.join(__dirname, 'node_modules'),
      },

      // Image
      {
        test: /\.png$/,
        loader: 'file',
        include: path.join(__dirname, 'app'),
      },
    ],
  },
  postcss: () => [
    require('postcss-simple-vars')({
      variables() {
        return require('./app/styles/colors');
      },
    }),
    require('precss'),
    require('postcss-font-magician'),
    require('autoprefixer'),
  ],
};
