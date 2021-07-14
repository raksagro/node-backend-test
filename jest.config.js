/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ["src/**"],
  coverageDirectory: "__tests__/covarage",
  coverageProvider: "v8",
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.test.js?(x)",
  ],
};
