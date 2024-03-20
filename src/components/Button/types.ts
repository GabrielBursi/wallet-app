import { ComponentProps } from 'react'
import { PressableProps } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

/* eslint-disable @typescript-eslint/ban-types */
export type ButtonProps = {
	title: string
	type?: 'primary' | 'ghost'
	icon?: ComponentProps<typeof Icon>
	fullWidth?: boolean
} & PressableProps
