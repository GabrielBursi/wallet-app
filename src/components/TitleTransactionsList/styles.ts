/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'
import { darken } from 'polished'

type LinkText = {
	isPressed?: boolean
}

export const TitleTransactionsList = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const Title = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.primaryText};
		font-family: ${theme.font.family.poppinsSemiBold};
		font-size: ${theme.font.sizes.large}px;
		text-transform: capitalize;
	`}
`

export const ActionContainer = styled.Pressable`
	${({ theme }) => css`
		padding: ${theme.spacings.xxsmall}px;
		align-items: center;
		justify-content: center;
	`}
`

export const ActionText = styled.Text<LinkText>`
	${({ theme, isPressed = false }) => css`
		color: ${isPressed
			? darken(0.2, theme.colors.secondaryText)
			: theme.colors.secondaryText};
		font-family: ${isPressed
			? theme.font.family.poppinsSemiBold
			: theme.font.family.poppinsRegular};
		font-size: ${theme.font.sizes.small}px;
		text-transform: capitalize;
	`}
`
