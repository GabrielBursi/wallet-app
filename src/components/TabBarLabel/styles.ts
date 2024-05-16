/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'

export const TabBarLabel = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.xsmall}px;
		font-family: ${theme.font.family.poppinsRegular};
		text-transform: capitalize;
	`}
`
