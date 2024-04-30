/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'

export const TotalBalance = styled.View`
	${({ theme }) => css`
		gap: ${theme.spacings.xxsmall}px;
		align-items: center;
		justify-content: center;
	`}
`

export const BalanceText = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.xxlarge}px;
		font-family: ${theme.font.family.poppinsSemiBold};
		color: ${theme.colors.secondaryText};
	`}
`

export const Title = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.medium}px;
		font-family: ${theme.font.family.poppinsLight};
		color: ${theme.colors.normalText};
		text-transform: capitalize;
	`}
`
