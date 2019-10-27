module.exports = {
  moduleFileExtensions: ['js', 'json', 'node'],
  moduleNameMapper: {
    '^.+\\.(css|sass)$': 'identity-obj-proxy',
    '^src(.*)$': '<rootDir>/src/$1',
    '^app(.*)$': '<rootDir>/src/app/$1',
  },
  globals: {
    __SECTIONS_ENDPOINT__: 'api/sections',
  },
  rootDir: '../../',
  roots: ['<rootDir>/src'],
  reporters: ['default', ['jest-junit', { outputDirectory: './reports/' }]],
  restoreMocks: true,
  testMatch: ['**/*.spec.*'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
};
