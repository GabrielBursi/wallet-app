/* eslint-disable @typescript-eslint/no-unused-vars */
import { RFValue } from 'react-native-responsive-fontsize'
import { styled, css } from 'styled-components/native'

export const Container = styled.View`
	${({ theme }) => css`
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		padding-left: ${RFValue(theme.spacings.small)}px;
		padding-right: ${RFValue(theme.spacings.small)}px;
	`}
`
