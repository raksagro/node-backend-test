export default {
  roots: ['<rootDir>/__tests__'],

  clearMocks: true,

  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',

  coverageProvider: 'v8',
  testEnvironment: 'node',

  setupFiles: ['./__tests__/jestSetup.js'],
  testMatch: ['**/__tests__/**/*.spec.ts?(x)'],

  transform: {
    '.+\\.ts$': 'ts-jest'
  }

}