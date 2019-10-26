const webpack = require('webpack');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonWebpack = require('./webpack.common');

const env = {
  environment: 'development',
  cssName: '[name].css',
  cache: true,
  devtool: 'source-map',
  output: {
    path: helpers.buildPath,
    filename: '[name].js',
  },
  devServer: {
    contentBase: helpers.buildPath,
    inline: true,
    https: false,
    host: 'localhost',
    port: 8080,
    stats: 'minimal',
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      title: 'Accordion component',
      filename: 'index.html',
      template: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],

  optimization: {
    noEmitOnErrors: true,
    splitChunks: {
      minChunks: Infinity,
      name: true,
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(scss|css)$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
};

module.exports = commonWebpack(env);
