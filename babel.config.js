module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 2,
      },
    ],
  ],
  plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
};
