/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'

export const Container = styled.View`
	${({ theme }) => css`
		width: 100%;
		margin-left: auto;
		flex: 1;
		margin-right: auto;
		padding-left: ${theme.spacings.small}px;
		padding-right: ${theme.spacings.small}px;
	`}
`
