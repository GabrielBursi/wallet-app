/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const ActionAccount = styled.Pressable`
	${({ theme }) => css`
		gap: ${RFValue(theme.spacings.xsmall)}px;
		align-items: center;
		justify-content: center;
		width: ${RFValue(110)}px;
		height: ${RFValue(110)}px;
	`}
`

export const IconContainer = styled.View`
	${({ theme }) => css`
		background-color: ${theme.colors.mainBg};
		border-radius: 50px;
		padding: ${RFValue(theme.spacings.small)}px;
		justify-content: center;
		align-items: center;
		border: 1px;
		border-color: ${theme.colors.normalText};
	`}
`

export const Title = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.primary};
		font-family: ${theme.font.family.poppinsSemiBold};
		text-transform: capitalize;
		font-size: ${RFValue(theme.font.sizes.large)}px;
	`}
`
