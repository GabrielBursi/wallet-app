import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from 'styled-components/native'
import normalize from 'react-native-normalize'

import { EmptyListProps } from './types'
import * as S from './styles'

export const EmptyList = ({ title }: EmptyListProps) => {
	const theme = useTheme()

	return (
		<S.EmptyList>
			<S.EmptyText accessibilityRole="text">{title}</S.EmptyText>
			<Icon
				name="file-tray-outline"
				role="img"
				accessibilityLabel={title}
				size={normalize(55)}
				color={theme.colors.secondaryText}
			/>
		</S.EmptyList>
	)
}
