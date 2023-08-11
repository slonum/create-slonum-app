const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^lib/app/(.*)$': '<rootDir>/src/lib/app/$1',
    '^lib/pages/(.*)$': '<rootDir>/src/lib/pages/$1',
    '^lib/shared/(.*)$': '<rootDir>/src/lib/shared/$1',
    '^lib/entities/(.*)$': '<rootDir>/src/lib/entities/$1',
    '^lib/features/(.*)$': '<rootDir>/src/lib/features/$1',
    '^@ui/(.*)$': '<rootDir>/src/lib/shared/lib/ui-kit/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/*.test.tsx', '**/*.test.ts'],
  collectCoverageFrom: [
    '<rootDir>/src/lib/**/*.{ts,tsx}',
    '!<rootDir>/src/lib/shared/lib/types/**/*.ts',
    '!<rootDir>/src/lib/**/*.stories.tsx',
    '!<rootDir>/src/lib/**/*Icon.tsx',
    '!<rootDir>/src/lib/**/Svg*.tsx',
    '!<rootDir/src>/lib/**/index.ts',
    '!<rootDir>/src/lib/**/types.ts',
    '!<rootDir>/src/lib/**/types/**/*.ts',
    '!<rootDir>/src/lib/**/interface.ts',
    '!<rootDir>/src/lib/**/interfaces.ts',
    '!**/__snapshots__/**',
  ],
  coverageDirectory: './coverage',
};

module.exports = createJestConfig(customJestConfig);
