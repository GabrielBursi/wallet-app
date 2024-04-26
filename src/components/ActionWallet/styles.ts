/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'
import normalize from 'react-native-normalize'
import { lighten } from 'polished'

export const ActionWallet = styled.Pressable`
	${({ theme }) => css`
		justify-content: center;
		align-items: center;
		gap: ${theme.spacings.xxsmall}px;
		width: ${normalize(76)}px;
		height: ${normalize(76)}px;
	`}
`

export const IconContainer = styled.TouchableHighlight`
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
		font-size: ${theme.font.sizes.xsmall}px;
	`}
`
