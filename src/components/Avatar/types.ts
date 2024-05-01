import { ImageProps } from 'react-native'

/* eslint-disable @typescript-eslint/ban-types */
export type AvatarProps = {
	username: string
	size?: 'normal' | 'small'
} & Omit<
	ImageProps,
	| 'accessible'
	| 'accessibilityRole'
	| 'accessibilityLabel'
	| 'alt'
	| 'width'
	| 'height'
	| 'defaultSource'
	| 'source'
>
