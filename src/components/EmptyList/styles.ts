/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'

export const EmptyList = styled.View`
	${({ theme }) => css`
		justify-content: center;
		align-items: center;
		gap: ${theme.spacings.xxsmall}px;
	`}
`

export const EmptyText = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.medium}px;
		color: ${theme.colors.secondaryText};
		font-family: ${theme.font.family.poppinsRegular};
		text-transform: capitalize;
		text-align: center;
	`}
`
