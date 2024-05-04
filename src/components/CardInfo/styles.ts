/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'

export const CardInfo = styled.View`
	${({ theme }) => css`
		background-color: ${theme.colors.secondary};
		padding: ${theme.spacings.medium}px;
		flex-direction: row;
		align-items: center;
		gap: ${theme.spacings.xxsmall}px;
		border-radius: 40px;
		height: 100%;
	`}
`

export const ColumnInfo = styled.View`
	${({ theme }) => css`
		gap: ${theme.spacings.xxsmall}px;
		flex: 1;
	`}
`

export const Label = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.large}px;
		font-family: ${theme.font.family.poppinsSemiBold};
		text-transform: capitalize;
	`}
`

export const ValueText = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.xxlarge}px;
		font-family: ${theme.font.family.poppinsSemiBold};
		text-transform: capitalize;
	`}
`
