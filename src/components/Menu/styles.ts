/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'

export const Menu = styled.View`
	${({ theme }) => css`
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: ${theme.spacings.xxsmall}px;
	`}
`
