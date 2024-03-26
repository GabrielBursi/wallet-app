import { PressableProps } from 'react-native'
import { Icon } from '@/types/utils'

/* eslint-disable @typescript-eslint/ban-types */
export type ButtonProps = {
	title: string
	type?: 'primary' | 'ghost'
	icon?: Icon
	fullWidth?: boolean
} & PressableProps
