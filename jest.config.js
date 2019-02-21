module.exports = {
  verbose: true,
  cacheDirectory: './.cache',
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
  },
};
