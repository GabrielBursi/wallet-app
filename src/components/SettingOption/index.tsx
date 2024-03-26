import React, { memo } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useTheme } from 'styled-components/native'

import { SettingOptionProps } from './types'
import * as S from './styles'

const SettingOptionMemoized = ({
	title,
	icon,
	...rest
}: SettingOptionProps) => {
	const theme = useTheme()

	return (
		<S.SettingOption {...rest}>
			<S.TitleContainer>
				{!!icon && (
					<S.IconContainer style={{ elevation: 6 }}>
						<Icon
							name={icon.name}
							size={25}
							accessibilityLabel={icon.name}
							role="img"
							accessibilityRole="image"
							color={theme.colors.primaryText}
						/>
					</S.IconContainer>
				)}
				<S.Title accessibilityLabel={title} accessibilityRole="text">
					{title}
				</S.Title>
			</S.TitleContainer>
			<Icon
				name="arrow-right"
				size={15}
				accessibilityLabel="arrow-right"
				accessibilityHint="acessar opção de configuração"
				role="img"
				accessibilityRole="image"
				color={theme.colors.primaryText}
			/>
		</S.SettingOption>
	)
}

export const SettingOption = memo(SettingOptionMemoized)
