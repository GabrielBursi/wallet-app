import type { Config } from 'jest';

const config: Config = {
  preset: 'react-native',
  collectCoverage: true,
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  setupFiles: ["./node_modules/react-native-gesture-handler/jestSetup.js"],
  modulePaths: ['<rootDir>/src'],
  testPathIgnorePatterns: ['/node_modules/'],
  roots: ["<rootDir>/src"],
  collectCoverageFrom: [
    'src/components/**/*.tsx',
    'src/screens/**/*.tsx',
    '!src/components/**/*.spec.tsx',
    '!src/components/**/*.stories.tsx',
    '!src/screens/**/*.spec.tsx',
    '!src/**/*.spec.tsx',
    '!src/types/**',
    '!src/styles/**',
    '!src/**/*.stories.tsx',
    '!src/**/types.ts',
    '!src/**/styles.ts',
    '!src/components/index.ts',
    '!src/screens/index.ts',
  ],
};

export default config;