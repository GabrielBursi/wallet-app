import React from 'react'
import IconFA from 'react-native-vector-icons/FontAwesome'
import { useTheme } from 'styled-components/native'

import { ActionAccountProps } from './types'
import * as S from './styles'

export const ActionAccount = ({
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
			<S.IconContainer style={{ elevation: 4 }}>
				<IconFA
					accessibilityRole="image"
					accessibilityLabel={name}
					color={theme.colors.primary}
					size={35}
					name={name}
					{...restIcon}
				/>
			</S.IconContainer>
			<S.Title accessibilityRole="text" accessibilityLabel={title}>
				{title}
			</S.Title>
		</S.ActionAccount>
	)
}
