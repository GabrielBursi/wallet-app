import { PressableProps } from 'react-native'
import { Icon } from '@/types/utils'

export type ActionWalletProps = {
	title: string
	icon: Icon
} & PressableProps
