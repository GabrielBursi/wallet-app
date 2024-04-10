/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'
import normalize from 'react-native-normalize'
import { SocialButtonProps } from './types'

type ColorProp = Pick<SocialButtonProps, 'color'>

export const TouchableContainer = styled.TouchableHighlight`
	${({ theme }) => css`
		border-radius: ${theme.border.radius.big}px;
		width: ${normalize(140)}px;
	`}
`

export const SocialButton = styled.View<ColorProp>`
	${({ theme, color = 'white' }) => css`
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: ${theme.spacings.xsmall}px;
		padding: ${theme.spacings.small}px 0;
		border-radius: ${theme.border.radius.big}px;
		background-color: ${color === 'blue'
			? '#4368c7'
			: theme.colors.secondaryBg};
		border-width: 1px;
		border-color: ${theme.colors.normalText};
		width: ${normalize(140)}px;
	`}
`

export const Icon = styled.View`
	width: fit-content;
	height: fit-content;
	justify-content: center;
	align-items: center;
`

export const Title = styled.Text<ColorProp>`
	${({ theme, color = 'white' }) => css`
		font-size: ${theme.font.sizes.medium}px;
		font-family: ${theme.font.family.poppinsSemiBold};
		text-transform: capitalize;
		color: ${color === 'blue' ? theme.colors.white : theme.colors.normalText};
	`}
`
