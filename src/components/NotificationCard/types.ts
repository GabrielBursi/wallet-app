/* eslint-disable @typescript-eslint/ban-types */
export type NotificationCardProps = {
	title: string
	description: string
	date: string
	isNew?: boolean
	type?: 'received' | 'spent'
}
