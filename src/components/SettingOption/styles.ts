/* eslint-disable @typescript-eslint/no-unused-vars */
import { RFValue } from 'react-native-responsive-fontsize'
import { styled, css } from 'styled-components/native'

export const SettingOption = styled.Pressable`
	${({ theme }) => css`
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: transparent;
		padding: ${RFValue(theme.spacings.xsmall)}px;
	`}
`

export const TitleContainer = styled.View`
	${({ theme }) => css`
		flex-direction: row;
		align-items: center;
		gap: ${RFValue(theme.spacings.small)}px;
	`}
`

export const IconContainer = styled.View`
	${({ theme }) => css`
		background-color: ${theme.colors.mainBg};
		padding: ${RFValue(theme.spacings.xsmall)}px;
		border-radius: 50px;
		width: 45px;
		height: 45px;
		justify-content: center;
		align-items: center;
	`}
`

export const Title = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.font.family.poppinsRegular};
		color: ${theme.colors.primaryText};
		font-size: ${RFValue(theme.font.sizes.medium)}px;
		text-transform: capitalize;
	`}
`
