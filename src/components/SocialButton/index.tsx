import React, { memo } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from 'styled-components/native'

import { SocialButtonProps } from './types'
import * as S from './styles'

const SocialButtonMemoized = ({
	title,
	color = 'white',
	icon,
	onPress,
	...rest
}: SocialButtonProps) => {
	const { name, ...restIcon } = icon
	const theme = useTheme()

	return (
		<S.TouchableContainer
			{...rest}
			activeOpacity={0.6}
			underlayColor={theme.colors.shadow}
			onPress={onPress}
			role="button"
			accessibilityRole="button"
			accessibilityHint={`Fazer login com ${name}`}
			accessibilityLabel={title}
			aria-label={title}
		>
			<S.SocialButton
				testID="button-container"
				style={{ elevation: 6 }}
				color={color}
			>
				<S.Icon>
					<Icon
						{...restIcon}
						name={name}
						size={30}
						role="img"
						accessibilityLabel={name}
						aria-label={name}
					/>
				</S.Icon>
				<S.Title color={color}>{title}</S.Title>
			</S.SocialButton>
		</S.TouchableContainer>
	)
}

export const SocialButton = memo(SocialButtonMemoized)
