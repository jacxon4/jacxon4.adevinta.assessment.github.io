const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const commonWebpack = require('./webpack.common');

const env = {
  environment: 'production',
  cssName: '[name].min.css',
  cache: false,
  devtool: 'none',
  output: {
    path: helpers.distPath,
    filename: '[name].[hash].js',
  },
  optimization: {
    removeAvailableModules: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    flagIncludedChunks: true,
    occurrenceOrder: true,
    providedExports: true,
    usedExports: true,
    sideEffects: true,
    noEmitOnErrors: false,
    concatenateModules: true,
    runtimeChunk: true,
    minimize: true,
    splitChunks: {
      chunks: 'async',
      minChunks: 1,
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          enforce: true,
        },
        styles: {
          name: 'styles',
          test: /\.(scss|css)$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  rules: [
    {
      test: /\.css$/,
      use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
    },
  ],
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: true,
      reportFilename: helpers.rootPath + '/bundler-report/report.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Accordion component',
      filename: 'index.html',
      template: 'index.html',
      hash: true,
    }),
  ],
};

module.exports = commonWebpack(env);
