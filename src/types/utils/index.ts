import { ComponentProps } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

export type Icon = ComponentProps<typeof Ionicons>

export type CreditCard = {
	number: number
	name: string
	code: number
	date: string
}
