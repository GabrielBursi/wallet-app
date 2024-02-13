module.exports = {
	presets: [
		'module:@react-native/babel-preset',
		'@babel/preset-typescript',
		'@babel/preset-flow',
		[
			'module:metro-react-native-babel-preset',
			{ useTransformReactJSXExperimental: true },
		],
		'@babel/preset-env',
		'@babel/preset-react',
	],
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					'@/api': './src/api',
					'@/components': './src/components',
					'@/hooks': './src/hooks',
					'@/providers': './src/providers',
					'@/routes': './src/routes',
					'@/screens': './src/screens',
					'@/storage': './src/storage',
					'@/store': './src/store',
					'@/styles': './src/styles',
					'@/tests': './src/tests',
					'@/types': './src/types',
					'@/utils': './src/utils',
				},
			},
		],
	],
}
