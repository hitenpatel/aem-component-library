module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'src/{**/,}*.js',
  ],
  setupFiles: [
    '<rootDir>/tests/setup',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!@immediate_media)',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: -10,
    },
  },
};
