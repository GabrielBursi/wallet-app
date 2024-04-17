/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'

export const TitleScreen = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.primaryText};
		font-family: ${theme.font.family.poppinsSemiBold};
		font-size: ${theme.font.sizes.xlarge}px;
		text-transform: capitalize;
		text-align: center;
	`}
`
