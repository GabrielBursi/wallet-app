import { TouchableHighlightProps } from 'react-native'
import { Icon } from '@/types/utils'

/* eslint-disable @typescript-eslint/ban-types */
export type SettingOptionProps = {
	title: string
	icon?: Icon
	onPress: TouchableHighlightProps['onPress']
} & Omit<TouchableHighlightProps, 'onPress'>
