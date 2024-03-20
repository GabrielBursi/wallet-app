import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import { SocialButtonProps } from './types'
import * as S from './styles'

//TODO:
//? Fazer animação de clique

export const SocialButton = ({
	title,
	color = 'white',
	icon,
	...rest
}: SocialButtonProps) => {
	const { name, ...restIcon } = icon

	return (
		<S.SocialButton
			{...rest}
			style={{ elevation: 6 }}
			color={color}
			role="button"
			accessibilityRole="button"
			accessibilityHint={`Fazer login com ${name}`}
			accessibilityLabel={title}
			aria-label={title}
		>
			<S.Icon>
				<Icon
					name={name}
					size={20}
					role="img"
					accessibilityLabel={name}
					aria-label={name}
					{...restIcon}
				/>
			</S.Icon>
			<S.Title color={color}>{title}</S.Title>
		</S.SocialButton>
	)
}
