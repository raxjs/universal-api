const path = require('path');

// only run tests for someone API that config from environment
const { TEST_API } = process.env;

const genNpmAliasMapper = () => {
  const config = require('./api-config');
  const mapper = {};

  Object.keys(config).forEach((key) => {
    const value = config[key];
    const baseDir = path.dirname(value.path);
    const names = value.pkgInfo.map((i) => i.name);
    for (const name of names) {
      mapper[`^${name}$`] = `<rootDir>/${baseDir}/index.ts`;
      mapper[`^${name}/lib/([^/]+)$`] = `<rootDir>/${baseDir}/$1/index.ts`;
      mapper[`^${name}/lib/([^/]+)/(.*)$`] = `<rootDir>/${baseDir}/$1/$2`;
    }
  });

  return mapper;
};

module.exports = {
  verbose: false,
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
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    ...genNpmAliasMapper(),
  },
  testMatch: [
    TEST_API ? `**/${TEST_API}/__test__/**/*.test.{ts,tsx}` : '**/__test__/**/*.test.{ts,tsx}',
  ],
  collectCoverage: false,
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    'src/packages/**/src/**/*.{ts,tsx}',
    '!src/packages/**/src/types.{ts,tsx}',
    '!src/packages/base/**/*.{ts,tsx}',
    '!src/packages/device/network-info/**/*.{ts,tsx}',
    '!src/packages/interactive/{background,keyboard}/**/*.{ts,tsx}',
  ],
};
