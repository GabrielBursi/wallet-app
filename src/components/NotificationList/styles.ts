/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'

export const TitleList = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.large}px;
		color: ${theme.colors.primaryText};
		font-family: ${theme.font.family.poppinsSemiBold};
		text-transform: capitalize;
		text-align: center;
		background-color: ${theme.colors.mainBg};
	`}
`

export const Separator = styled.View`
	${({ theme }) => css`
		padding: ${theme.spacings.xsmall}px;
		width: 100%;
	`}
`
