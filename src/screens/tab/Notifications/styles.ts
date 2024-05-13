/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'

export const Notifications = styled.View`
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

export const NewListContainer = styled.View`
	flex: 2;
`

export const AllListContainer = styled.View`
	flex: 2.5;
`
