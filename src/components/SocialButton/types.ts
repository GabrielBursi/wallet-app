import { ComponentProps } from 'react'
import { PressableProps } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

/* eslint-disable @typescript-eslint/ban-types */
export type SocialButtonProps = {
	title: string
	color?: 'white' | 'blue'
	icon: ComponentProps<typeof Icon>
} & PressableProps
