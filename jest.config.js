const path = require('path');

module.exports = {
  verbose: true,
  rootDir: path.join(__dirname),
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: {
        target: 'es6',
        sourceMap: true,
      },
    },
  },
  moduleNameMapper: {
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  testMatch: [
    '**/__test__/**/*.test.{ts,tsx}',
  ],
  collectCoverage: false,
  // coverageDirectory: '<rootDir>/coverage',
  // collectCoverageFrom: [
  //   'src/**/*.{ts,tsx}',
  // ],
};
