import type { Config } from 'jest'

const config: Config = {
	preset: 'react-native',
	collectCoverage: true,
	coverageDirectory: 'coverage',
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
	setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
	modulePaths: ['<rootDir>/src'],
	transformIgnorePatterns: [
		'node_modules/(?!@react-native|react-native)'
	],
	roots: ['<rootDir>/src'],
	collectCoverageFrom: [
		'src/components/**/index.tsx',
		'src/screens/**/index.tsx',
		'src/templates/**/index.tsx',
	],
}

export default config
