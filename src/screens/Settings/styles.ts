/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'

export const Settings = styled.View`
	${({ theme }) => css`
		gap: ${theme.spacings.medium}px;
		flex: 1;
		align-items: center;
		padding-top: ${theme.spacings.xxlarge}px;
	`}
`

export const ListContainer = styled.View`
	${({ theme }) => css`
		gap: ${theme.spacings.small}px;
		width: 100%;
		flex: 1;
	`}
`
