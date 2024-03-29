import React, { memo } from 'react'
import { useTheme } from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { ButtonProps } from './types'
import * as S from './styles'

const ButtonMemoized = ({
	title,
	type = 'primary',
	fullWidth = false,
	icon,
	onPress,
	...rest
}: ButtonProps) => {
	const theme = useTheme()

	return (
		<S.TouchableContainer
			activeOpacity={0.6}
			underlayColor={theme.colors.primaryShadow}
			onPress={onPress}
			fullWidth={fullWidth}
			role="button"
			accessibilityRole="button"
			aria-label={title}
			accessibilityLabel={title}
			{...rest}
		>
			<S.ButtonContainer
				testID="button-container"
				type={type}
				icon={icon}
				fullWidth={fullWidth}
			>
				{!!icon && (
					<Icon
						{...icon}
						role="img"
						accessibilityLabel={icon.name}
						aria-label={icon.name}
						size={20}
						name={icon.name}
						color={theme.colors.white}
					/>
				)}
				<S.Title type={type}>{title}</S.Title>
			</S.ButtonContainer>
		</S.TouchableContainer>
	)
}

export const Button = memo(ButtonMemoized)
