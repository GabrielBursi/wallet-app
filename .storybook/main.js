module.exports = {
	stories: ['../src/components/**/*.stories.(ts|tsx)', '../src/screens/**/*.stories.(ts|tsx)', '../src/templates/**/*.stories.(ts|tsx)',],
	addons: [
		'@storybook/addon-ondevice-notes',
		'@storybook/addon-ondevice-controls',
		'@storybook/addon-ondevice-backgrounds',
		'@storybook/addon-ondevice-actions',
	],
}
