import { PressableProps } from 'react-native'
import { Icon } from '@/types/utils'

export type ActionWalletProps = {
	title: string
	icon: Icon
	onPress: PressableProps['onPress']
} & Omit<PressableProps, 'onPress'>
