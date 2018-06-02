module.exports = {
  projects: [
    {
      displayName: 'frontend',
      moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\\?.+)?$': '<rootDir>/__mocks__/fileMock.js',
      },
    },
    {
      displayName: 'lint',
      runner: 'jest-runner-eslint',
      testMatch: [
        '<rootDir>/__mocks__/**/*.js?(x)',
        '<rootDir>/__tests__/**/*.js?(x)',
        '<rootDir>/componenets/**/*.js?(x)',
        '<rootDir>/cypress/**/*.js?(x)',
        '<rootDir>/pages/**/*.js?(x)',
      ],
      testPathIgnorePatterns: ['/node_modules/', '__snapshots__'],
    },
  ],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
