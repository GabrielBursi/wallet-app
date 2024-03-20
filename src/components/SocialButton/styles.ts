/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { SocialButtonProps } from './types'

type ColorProp = Pick<SocialButtonProps, 'color'>

export const SocialButton = styled.Pressable<ColorProp>`
	${({ theme, color = 'white' }) => css`
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: ${theme.spacings.small}px;
		padding: ${theme.spacings.small}px ${theme.spacings.xsmall}px;
		border-radius: ${theme.border.radius.big}px;
		background-color: ${color === 'blue'
			? '#4368c7'
			: theme.colors.secondaryBg};
		border: 1px;
		border-color: ${theme.colors.normalText};
		width: ${RFValue(140)}px;
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
		font-size: ${RFValue(theme.font.sizes.small)}px;
		font-family: ${theme.font.family.poppinsSemiBold};
		text-transform: capitalize;
		color: ${color === 'blue' ? theme.colors.white : theme.colors.normalText};
	`}
`
