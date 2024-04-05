import React, { memo } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from 'styled-components/native'

import { NotificationCardProps } from './types'
import * as S from './styles'

const NotificationCardMemoized = ({
	date,
	description,
	title,
	isNew = false,
	type = 'spent',
}: NotificationCardProps) => {
	const theme = useTheme()

	return (
		<S.NotificationCard style={{ elevation: 4 }}>
			{isNew && <S.IsNewContainer accessibilityHint="nova notificação" />}
			<S.Content>
				<S.DateText
					accessibilityRole="text"
					accessibilityLabel={date}
					numberOfLines={1}
					ellipsizeMode="tail"
				>
					{date}
				</S.DateText>
				<S.Title
					accessibilityRole="text"
					accessibilityLabel={title}
					numberOfLines={2}
					ellipsizeMode="tail"
				>
					{title}
				</S.Title>
				<S.DescriptionText
					accessibilityRole="text"
					accessibilityLabel={description}
					numberOfLines={2}
					ellipsizeMode="tail"
				>
					{description}
				</S.DescriptionText>
			</S.Content>
			<S.IconContainer>
				<Icon
					accessibilityLabel={type === 'received' ? 'received' : 'spent'}
					accessibilityRole="image"
					role="img"
					name={type === 'received' ? 'arrow-up' : 'arrow-down'}
					size={20}
					color={type === 'received' ? theme.colors.green : theme.colors.red}
				/>
			</S.IconContainer>
		</S.NotificationCard>
	)
}

export const NotificationCard = memo(NotificationCardMemoized)
