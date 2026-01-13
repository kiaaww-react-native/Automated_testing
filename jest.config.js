
// jest.config.js (root, ESM)
export default {
  projects: [
    {
      displayName: 'division',
      rootDir: '<rootDir>/division',
      testEnvironment: 'node',
      testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
    },
    {
      displayName: 'initial',
      rootDir: '<rootDir>/initial',
      testEnvironment: 'node',
      testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
    },
  ],
};
