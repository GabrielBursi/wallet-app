export const theme = {
	border: {
		radius: {
			big: 10,
			small: 4,
		},
	},
	font: {
		family: {
			interMedium: 'Inter-Medium',
			interBold: 'Inter-Bold',
			interLight: 'Inter-Light',
			poppinsMedium: 'Poppins-Medium',
			poppinsBold: 'Poppins-Bold',
			poppinsLight: 'Poppins-Light',
			rubikMedium: 'Rubik-Medium',
			rubikBold: 'Rubik-Bold',
			rubikLight: 'Rubik-Light',
		},
		light: 300,
		normal: 400,
		bold: 600,
		sizes: {
			xsmall: 12,
			small: 14,
			medium: 16,
			large: 18,
			xlarge: 20,
			xxlarge: 28,
			huge: 50,
		},
	},
	colors: {
		primary: '#7A5CFF',
		secondary: '#A6B1E1',
		mainBg: '#FFFFFF',
		secondaryBg: '#F2F2F2',
		primaryText: '#333333',
		secondaryText: '#536162',
		black: '#000000',
		white: '#FFFFFF',
	},

	spacings: {
		xxsmall: 4,
		xsmall: 8,
		small: 16,
		medium: 24,
		large: 32,
		xlarge: 40,
		xxlarge: 48,
	},
	layers: {
		base: 10,
		menu: 20,
		overlay: 30,
		modal: 40,
		alwaysOnTop: 50,
	},
	elevation: {
		small: 2,
		medium: 4,
		large: 8,
		xlarge: 16,
	},
	opacity: {
		low: 0.5,
		medium: 0.7,
		high: 0.9,
	},
} as const
