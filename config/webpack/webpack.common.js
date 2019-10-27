const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const helpers = require('./helpers');

let URLBASE = process.env.config_default_uri || 'https://jacxon4.github.io/jacxon4.adevinta.assessment.github.io';
let SECTIONS_ENDPOINT = process.env.sections_endpoint || `${URLBASE}/deploy-db.json`;
module.exports = env => {
  if (env.SECTIONS_ENDPOINT) {
    SECTIONS_ENDPOINT = env.SECTIONS_ENDPOINT;
  }
  let plugins = [
    new MiniCssExtractPlugin({
      filename: env.cssName,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env.environment),
      __SECTIONS_ENDPOINT__: JSON.stringify(SECTIONS_ENDPOINT),
    }),
  ];

  if (env.plugins) {
    plugins = plugins.concat(env.plugins);
  }

  let rules = [
    {
      test: /\.(tsx?)|(js)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.sass$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    },
  ];

  if (env.rules) {
    rules = rules.concat(env.rules);
  }

  const config = {
    plugins,
    mode: env.environment,
    cache: env.cache,
    devtool: env.devtool,
    context: helpers.appPath,
    resolve: {
      extensions: ['.js', '.json', '.sass', '.css'],
      modules: ['node_modules'],
      alias: {
        app: helpers.appPath,
        src: helpers.src,
      },
    },
    entry: {
      app: ['./index.js'],
      appStyles: ['./theme.sass'],
      vendor: ['@babel/polyfill'],
    },
    module: {
      rules,
    },
    optimization: env.optimization,
  };

  if (env.entry) {
    config.entry = env.entry;
  }

  if (env.output) {
    config.output = {
      filename: env.output.filename,
      path: env.output.path,
    };
  }

  if (env.devServer) {
    config.devServer = env.devServer;
  }

  return config;
};
