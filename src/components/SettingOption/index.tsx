import React, { memo } from 'react'
import { TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from 'styled-components/native'

import { SettingOptionProps } from './types'
import * as S from './styles'

const SettingOptionMemoized = ({
	title,
	icon,
	onPress,
	...rest
}: SettingOptionProps) => {
	const theme = useTheme()

	return (
		<TouchableHighlight
			{...rest}
			accessible
			activeOpacity={0.6}
			underlayColor={theme.colors.shadow}
			onPress={onPress}
			accessibilityRole="menuitem"
			accessibilityLabel={title}
		>
			<S.SettingOption>
				<S.TitleContainer>
					{!!icon && (
						<S.IconContainer style={{ elevation: theme.elevation.medium }}>
							<Icon
								{...icon}
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
					name="chevron-forward-outline"
					size={15}
					accessibilityLabel="chevron-forward-outline"
					accessibilityHint="acessar opção de configuração"
					role="img"
					accessibilityRole="image"
					color={theme.colors.primaryText}
				/>
			</S.SettingOption>
		</TouchableHighlight>
	)
}

export const SettingOption = memo(SettingOptionMemoized)
