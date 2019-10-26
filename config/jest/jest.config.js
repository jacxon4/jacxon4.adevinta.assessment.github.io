module.exports = {
  coverageReporters: ['text', 'html', 'lcov'],
  collectCoverageFrom: ['**/*.{js}'],
  coveragePathIgnorePatterns: ['.+\\.spec.js'],
  moduleFileExtensions: ['js', 'json', 'node'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^app(.*)$': '<rootDir>/src/app/$1',
  },
  rootDir: '../../',
  roots: ['<rootDir>/src'],
  reporters: ['default', ['jest-junit', { outputDirectory: './reports/' }]],
  restoreMocks: true,
  testMatch: ['**/*.spec.*'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },

};
