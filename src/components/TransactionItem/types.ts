import { ImageSourcePropType } from 'react-native'

/* eslint-disable @typescript-eslint/ban-types */
export type TransactionItemProps = {
	title: string
	description?: string
	value: number
	image?: ImageSourcePropType
}
