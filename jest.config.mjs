import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
	dir: './',
});

/** @type {import('jest').Config} */
const config = {
	setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.js'],
	testEnvironment: 'jest-environment-jsdom',
	preset: 'ts-jest',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.ts(x)?',
		'!src/app/**',
		'!src/domain/**',
		'!src/presentation/components/**/**/*.stories.tsx',
		'!src/presentation/styles/**',
		'!src/presentation/mappers/index.ts',
		'!src/utils/cn.ts',
		'!src/libs/**',
		'!src/api/**',
	],
};

export default createJestConfig(config);
