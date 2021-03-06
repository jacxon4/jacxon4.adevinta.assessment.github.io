module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      alias: [['src', './src'], ['app', './src/app']],
    },
  },
};
