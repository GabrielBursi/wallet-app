import { ImageSourcePropType } from 'react-native'

export type Transaction = {
	title: string
	description?: string
	value: number
	image?: ImageSourcePropType
	date: Date
}
