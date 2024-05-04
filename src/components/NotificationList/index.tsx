import React from 'react'
import { FlashList } from '@shopify/flash-list'
import normalize from 'react-native-normalize'

import { EmptyList, NotificationCard } from '@/components'

import * as S from './styles'
import { NotificationListProps } from './types'

export const NotificationList = ({
	notifications,
	title,
	onRefresh,
	refreshing,
}: NotificationListProps) => {
	return (
		<FlashList
			accessible
			role="list"
			accessibilityLabel={title}
			data={notifications}
			renderItem={({ item: notification }) => (
				<NotificationCard {...notification} />
			)}
			keyExtractor={({ title }, index) => `${title}-${index}`}
			estimatedItemSize={normalize(125, 'height')}
			ListHeaderComponent={
				<S.TitleList accessibilityRole="text">{title}</S.TitleList>
			}
			ItemSeparatorComponent={S.Separator}
			ListEmptyComponent={<EmptyList title="Você não possui notificações" />}
			refreshing={refreshing}
			onRefresh={onRefresh}
			showsVerticalScrollIndicator={false}
		/>
	)
}
