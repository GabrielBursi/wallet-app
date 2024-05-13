import React, { useCallback, useMemo } from 'react'
import { FlashList, ListRenderItem } from '@shopify/flash-list'
import normalize from 'react-native-normalize'

import { EmptyList, NotificationCard } from '@/components'
import { Notification } from '@/types/app'

import * as S from './styles'
import { NotificationListProps } from './types'

export const NotificationList = ({
	notifications,
	title,
	onRefresh,
	refreshing,
}: NotificationListProps) => {
	const formatNotificationWithTitle = useCallback(() => {
		if (!notifications.length) return []

		const notificationsWithTitle = [title, ...notifications]
		return notificationsWithTitle
	}, [notifications, title])

	const keyExtractor: (item: string | Notification, index: number) => string =
		useCallback((item, index) => {
			if (typeof item === 'string') return `${item}-${index}`

			return `${item.date}-${index}-${item.title}`
		}, [])

	const getItemType: (item: string | Notification, index: number) => string =
		useCallback(
			(item) => (typeof item === 'string' ? 'sectionHeader' : 'row'),
			[]
		)

	const renderItem: ListRenderItem<string | Notification> = useCallback(
		({ item }) => {
			if (typeof item === 'string')
				return <S.TitleList accessibilityRole="text">{title}</S.TitleList>

			return <NotificationCard {...item} />
		},
		[title]
	)

	const notificationsWithTitle = useMemo(
		() => formatNotificationWithTitle(),
		[formatNotificationWithTitle]
	)

	const stickyHeaderIndices = notificationsWithTitle
		.map((item, index) => {
			if (typeof item === 'string') return index

			return -1
		})
		.filter((item) => item !== -1)

	return (
		<FlashList
			accessible
			role="list"
			accessibilityLabel={title}
			data={notificationsWithTitle}
			renderItem={renderItem}
			getItemType={getItemType}
			stickyHeaderIndices={stickyHeaderIndices}
			keyExtractor={keyExtractor}
			estimatedItemSize={normalize(125, 'height')}
			ItemSeparatorComponent={S.Separator}
			ListHeaderComponent={
				!notifications.length ? (
					<S.TitleList
						accessibilityRole="text"
						aria-hidden={!!notifications.length}
						accessibilityElementsHidden={!!notifications.length}
					>
						{title}
					</S.TitleList>
				) : null
			}
			ListEmptyComponent={<EmptyList title="Você não possui notificações" />}
			refreshing={refreshing}
			onRefresh={onRefresh}
			showsVerticalScrollIndicator={false}
		/>
	)
}
