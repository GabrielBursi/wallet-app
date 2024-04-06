/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import normalize from 'react-native-normalize'

export const AccountInfo = styled.View`
	${({ theme }) => css`
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: ${normalize(theme.spacings.xxsmall)}px;
	`}
`

export const Title = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.normalText};
		font-family: ${theme.font.family.poppinsLight};
		font-size: ${RFValue(theme.font.sizes.medium)}px;
		text-transform: capitalize;
		max-width: 50%;
	`}
`

export const Text = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.primaryText};
		font-family: ${theme.font.family.poppinsRegular};
		font-size: ${RFValue(theme.font.sizes.medium)}px;
		text-transform: capitalize;
		width: 50%;
		text-align: right;
	`}
`
