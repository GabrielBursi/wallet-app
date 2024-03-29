import React, { memo } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useTheme } from 'styled-components/native'

import { SettingOptionProps } from './types'
import * as S from './styles'
import { TouchableHighlight } from 'react-native'

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
			activeOpacity={0.6}
			underlayColor={theme.colors.shadow}
			onPress={onPress}
			role="button"
			accessibilityRole="button"
			aria-label={title}
			accessibilityLabel={title}
		>
			<S.SettingOption>
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
		</TouchableHighlight>
	)
}

export const SettingOption = memo(SettingOptionMemoized)
