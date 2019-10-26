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
      test: /\.(scss)$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            importLoaders: 1,
            localIdentName: process.env.NODE_ENV === 'test' ? '[local]' : '[name]__[local]___[hash:base64:5]',
          },
        },
      ],
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
    context: helpers.srcPath,
    resolve: {
      extensions: ['.js', '.json', '.scss', '.css'],
      modules: ['node_modules'],
      alias: {
        app: helpers.srcPath,
      },
    },
    entry: {
      main: ['./index.js'],
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
