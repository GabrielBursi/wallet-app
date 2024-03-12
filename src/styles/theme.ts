export const theme = {
	grid: {
		container: '130rem',
		gutter: '3.2rem',
	},
	border: {
		radius: {
			big: '5rem',
			small: '0.4rem',
		},
	},
	font: {
		family: {
			interBlack: 'Inter-Black',
		},
		light: 300,
		normal: 400,
		bold: 600,
		sizes: {
			xsmall: '1.2rem',
			small: '1.4rem',
			medium: '1.6rem',
			large: '1.8rem',
			xlarge: '2.0rem',
			xxlarge: '2.8rem',
			huge: '5rem',
		},
	},
	colors: {
		primary: '#000',
		secondary: '#000',
		mainBg: '#000',
		secondaryBg: '#000',
		primaryText: '#000',
		secondaryText: '#000',
		black: '#000',
		white: '#fff',
	},
	spacings: {
		xxsmall: '0.8rem',
		xsmall: '1.6rem',
		small: '2.4rem',
		medium: '3.2rem',
		large: '4.0rem',
		xlarge: '4.8rem',
		xxlarge: '5.6rem',
	},
	layers: {
		base: 10,
		menu: 20,
		overlay: 30,
		modal: 40,
		alwaysOnTop: 50,
	},
	transition: {
		default: '0.3s ease-in-out',
		fast: '0.1s ease-in-out',
	},
	breakpoints: {
		smallHeight: '599px',
		mediumHeight: '899px',
		largeHeight: '900px',
	},
} as const
