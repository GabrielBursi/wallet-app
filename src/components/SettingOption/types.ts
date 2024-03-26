import { PressableProps } from 'react-native'
import { Icon } from '@/types/utils'

/* eslint-disable @typescript-eslint/ban-types */
export type SettingOptionProps = {
	title: string
	icon?: Icon
} & PressableProps
