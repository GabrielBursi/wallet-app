/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const NotificationCard = styled.View`
	${({ theme }) => css`
		flex-direction: row;
		justify-content: space-between;
		gap: ${RFValue(theme.spacings.xsmall)}px;
		background-color: ${theme.colors.mainBg};
		border-radius: ${theme.border.radius.big}px;
		position: relative;
		height: ${RFValue(125)}px;
		padding: ${RFValue(theme.spacings.xsmall)}px
			${RFValue(theme.spacings.small)}px;
	`}
`

export const IsNewContainer = styled.View`
	${({ theme }) => css`
		position: absolute;
		top: 1px;
		right: 1px;
		background-color: ${theme.colors.red};
		width: ${RFValue(theme.spacings.xsmall)}px;
		height: ${RFValue(theme.spacings.xsmall)}px;
		border-radius: ${theme.border.radius.big}px;
	`}
`

export const Content = styled.View`
	${({ theme }) => css`
		gap: ${RFValue(theme.spacings.xxsmall)}px;
		flex: 1;
	`}
`

export const IconContainer = styled.View`
	justify-content: center;
	align-items: center;
`

export const DateText = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.normalText};
		font-size: ${RFValue(theme.font.sizes.small)}px;
		font-family: ${theme.font.family.poppinsLight};
		letter-spacing: ${RFValue(1)}px;
	`}
`

export const DescriptionText = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.normalText};
		font-size: ${RFValue(theme.font.sizes.xsmall)}px;
		font-family: ${theme.font.family.poppinsLight};
		letter-spacing: ${RFValue(1)}px;
	`}
`

export const Title = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.primaryText};
		font-size: ${RFValue(theme.font.sizes.medium)}px;
		font-family: ${theme.font.family.poppinsRegular};
	`}
`
