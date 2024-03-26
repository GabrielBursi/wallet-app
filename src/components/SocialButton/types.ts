import { PressableProps } from 'react-native'
import { Icon } from '@/types/utils'

/* eslint-disable @typescript-eslint/ban-types */
export type SocialButtonProps = {
	title: string
	color?: 'white' | 'blue'
	icon: Icon
} & PressableProps
