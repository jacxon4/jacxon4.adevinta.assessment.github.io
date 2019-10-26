const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const helpers = require('./helpers');

module.exports = env => {
  let plugins = [
    new MiniCssExtractPlugin({
      filename: env.cssName,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env.environment),
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
      test: /\.scss$/,
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
      extensions: ['.js', '.json', '.scss', '.css'],
      modules: ['node_modules'],
      alias: {
        app: helpers.appPath,
        src: helpers.src,
      },
    },
    entry: {
      app: ['./index.js'],
      appStyles: ['./styles.scss'],
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
