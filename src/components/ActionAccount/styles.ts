/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'
import normalize from 'react-native-normalize'

export const ActionAccount = styled.Pressable`
	${({ theme }) => css`
		gap: ${theme.spacings.xsmall}px;
		align-items: center;
		justify-content: center;
		width: ${normalize(150)}px;
		height: ${normalize(150)}px;
	`}
`

export const IconContainer = styled.View`
	${({ theme }) => css`
		background-color: ${theme.colors.mainBg};
		border-radius: 50px;
		justify-content: center;
		align-items: center;
		border: 1px;
		width: ${normalize(65)}px;
		height: ${normalize(65)}px;
		border-color: ${theme.colors.normalText};
	`}
`

export const Title = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.primary};
		font-family: ${theme.font.family.poppinsSemiBold};
		text-transform: capitalize;
		font-size: ${theme.font.sizes.large}px;
	`}
`
