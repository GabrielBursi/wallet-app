/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'

export const CardInfo = styled.View`
	${({ theme }) => css`
		background-color: ${theme.colors.secondary};
		padding: ${theme.spacings.xlarge}px;
		flex-direction: row;
		align-items: center;
		gap: ${theme.spacings.xxsmall}px;
		border-radius: 40px;
	`}
`

export const ColumnInfo = styled.View<{ flex?: 1 | 2 }>`
	${({ theme, flex = 1 }) => css`
		gap: ${theme.spacings.xxsmall}px;
		flex: ${flex};
	`}
`

export const Label = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.small}px;
		font-family: ${theme.font.family.poppinsSemiBold};
		text-transform: capitalize;
	`}
`

export const ValueText = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.large}px;
		font-family: ${theme.font.family.poppinsSemiBold};
		text-transform: capitalize;
	`}
`
