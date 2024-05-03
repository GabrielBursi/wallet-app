import { ImageSourcePropType } from 'react-native'

export type Transaction = {
	title: string
	description?: string
	value: number
	image?: ImageSourcePropType
	date: Date
}

export type Notification = {
	title: string
	description: string
	date: string
	isNew?: boolean
	type?: 'received' | 'spent'
}
