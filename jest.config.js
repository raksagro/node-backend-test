import { resolve } from 'path';
const root = resolve(__dirname);
export const rootDir = root;
export const displayName = 'root-tests';
export const testMatch = ['<rootDir>/src/**/*.test.ts'];
export const testEnvironment = 'node';
export const clearMocks = true;
export const preset = 'ts-jest';
export const moduleNameMapper = {
    '@src/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/test/$1',
};
