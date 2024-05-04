import { FlashListProps } from '@shopify/flash-list'
import { NotificationCardProps } from '../NotificationCard/types'

/* eslint-disable @typescript-eslint/ban-types */
export type NotificationListProps = {
	title: string
	notifications: NotificationCardProps[]
} & RefreshProps

type RefreshProps = Pick<
	FlashListProps<NotificationListProps[]>,
	'onRefresh' | 'refreshing'
>
