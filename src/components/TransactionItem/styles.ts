/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'
import normalize from 'react-native-normalize'
import { RFValue } from 'react-native-responsive-fontsize'

export const TransactionItem = styled.View`
	${({ theme }) => css`
		background-color: transparent;
		flex-direction: row;
		gap: ${RFValue(theme.spacings.xsmall)}px;
		justify-content: space-between;
		align-items: center;
		padding: ${normalize(theme.spacings.xxsmall)}px
			${normalize(theme.spacings.small)}px;
	`}
`

export const ValueContainer = styled.View`
	justify-content: center;
	align-items: center;
`

export const ValueText = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.black};
		font-family: ${theme.font.family.poppinsSemiBold};
		font-size: ${RFValue(theme.font.sizes.medium)}px;
	`}
`

export const Title = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.black};
		font-family: ${theme.font.family.poppinsSemiBold};
		font-size: ${RFValue(theme.font.sizes.medium)}px;
		text-transform: capitalize;
	`}
`

export const Description = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.normalText};
		font-family: ${theme.font.family.poppinsRegular};
		font-size: ${RFValue(theme.font.sizes.small)}px;
		text-transform: capitalize;
	`}
`

export const Content = styled.View`
	${({ theme }) => css`
		flex: 1;
		flex-direction: row;
		align-items: center;
		gap: ${RFValue(theme.spacings.xsmall)}px;
	`}
`

export const TitleContainer = styled.View``

export const ImageIcon = styled.Image`
	${({ theme }) => css`
		width: ${normalize(45)}px;
		height: ${normalize(45)}px;
		border-radius: ${theme.border.radius.medium}px;
	`}
`
