import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from 'styled-components/native'

import { ActionWalletProps } from './types'
import * as S from './styles'

export const ActionWallet = ({ icon, title, ...rest }: ActionWalletProps) => {
	const theme = useTheme()

	return (
		<S.ActionWallet
			{...rest}
			accessibilityRole="button"
			accessibilityLabel={icon.name}
			accessibilityHint={`ir para ${title}`}
		>
			<S.IconContainer style={{ elevation: theme.elevation.medium }}>
				<Icon
					{...icon}
					name={icon.name}
					accessibilityRole="image"
					accessibilityLabel={icon.name}
					size={32}
					color={theme.colors.primaryText}
				/>
			</S.IconContainer>
			<S.Title accessibilityRole="text">{title}</S.Title>
		</S.ActionWallet>
	)
}
