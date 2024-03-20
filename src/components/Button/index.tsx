import React from 'react'
import { ButtonProps } from './types'
import Icon from 'react-native-vector-icons/FontAwesome'

import * as S from './styles'

import { theme } from '@/styles'

//TODO:
//? Animação de clique

export const Button = ({
	title,
	type = 'primary',
	fullWidth = false,
	icon,
	...rest
}: ButtonProps) => {
	return (
		<S.Button
			{...rest}
			role="button"
			aria-label={title}
			accessibilityLabel={title}
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
		</S.Button>
	)
}
