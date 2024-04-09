/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'
import normalize from 'react-native-normalize'
import { lighten } from 'polished'
import { RFValue } from 'react-native-responsive-fontsize'

export const ActionWallet = styled.Pressable`
	${({ theme }) => css`
		justify-content: center;
		align-items: center;
		gap: ${theme.spacings.xxsmall}px;
		width: ${normalize(90)}px;
		height: ${normalize(90)}px;
	`}
`

export const IconContainer = styled.View`
	${({ theme }) => css`
		background-color: ${theme.colors.mainBg};
		border-radius: ${theme.border.radius.big}px;
		justify-content: center;
		align-items: center;
		border-width: 1px;
		width: ${normalize(55)}px;
		height: ${normalize(55)}px;
		border-color: ${lighten(0.6, theme.colors.normalText)};
	`}
`

export const Title = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.secondaryText};
		font-family: ${theme.font.family.poppinsSemiBold};
		text-transform: capitalize;
		font-size: ${RFValue(theme.font.sizes.small)}px;
	`}
`