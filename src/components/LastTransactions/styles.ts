/* eslint-disable @typescript-eslint/no-unused-vars */
import { darken } from 'polished'
import { styled, css } from 'styled-components/native'

type LinkText = {
	isPressed?: boolean
}

export const LastTransactions = styled.View`
	${({ theme }) => css`
		gap: ${theme.spacings.xsmall}px;
	`}
`
export const TitleContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const Title = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.primaryText};
		font-family: ${theme.font.family.poppinsSemiBold};
		font-size: ${theme.font.sizes.xlarge}px;
		text-transform: capitalize;
	`}
`

export const LinkContainer = styled.Pressable`
	${({ theme }) => css`
		padding: ${theme.spacings.xxsmall}px;
		align-items: center;
		justify-content: center;
	`}
`

export const Link = styled.Text<LinkText>`
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

export const TransactionsContainer = styled.View`
	${({ theme }) => css`
		gap: ${theme.spacings.xxsmall}px;
	`}
`
