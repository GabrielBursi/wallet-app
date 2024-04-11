import React, { memo } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from 'styled-components/native'

import { ActionAccountProps } from './types'
import * as S from './styles'

const ActionAccountMemoized = ({
	icon,
	title,
	...restProps
}: ActionAccountProps) => {
	const { name, ...restIcon } = icon

	const theme = useTheme()

	return (
		<S.ActionAccount
			accessibilityHint={`ir para ${title}`}
			accessibilityRole="button"
			accessibilityLabel={title}
			{...restProps}
		>
			<S.IconContainer style={{ elevation: theme.elevation.medium }}>
				<Icon
					{...restIcon}
					accessibilityRole="image"
					accessibilityLabel={name}
					color={theme.colors.primary}
					size={35}
					name={name}
				/>
			</S.IconContainer>
			<S.Title accessibilityRole="text" accessibilityLabel={title}>
				{title}
			</S.Title>
		</S.ActionAccount>
	)
}

export const ActionAccount = memo(ActionAccountMemoized)
