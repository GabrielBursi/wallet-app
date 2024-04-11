import { styled, css } from 'styled-components/native'
import normalize from 'react-native-normalize'

export const CreditCard = styled.View`
	${({ theme }) => css`
		background-color: ${theme.colors.secondary};
		padding: ${theme.spacings.medium}px;
		border-radius: 40px;
		height: ${normalize(220)}px;
		border-width: 1px;
		border-color: ${theme.colors.primary};
		justify-content: space-between;
	`}
`

export const Container = styled.View<{ align?: 'start' | 'end' }>`
	${({ align = 'start' }) => css`
		align-items: ${`flex-${align}`};
		justify-content: center;
	`}
`

export const ImageStyled = styled.Image`
	width: ${normalize(40)}px;
	height: ${normalize(40)}px;
`

export const NumberContainer = styled.View`
	${({ theme }) => css`
		flex-direction: row;
		gap: ${theme.spacings.small}px;
	`}
`

export const NumberCard = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.font.family.poppinsSemiBold};
		font-size: ${theme.font.sizes.large}px;
		color: ${theme.colors.white};
	`}
`

export const NameCard = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.font.family.poppinsSemiBold};
		font-size: ${theme.font.sizes.large}px;
		color: ${theme.colors.white};
		text-transform: uppercase;
		letter-spacing: ${theme.spacings.xxsmall}px;
	`}
`

export const DateCard = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.font.family.poppinsSemiBold};
		font-size: ${theme.font.sizes.small}px;
		color: ${theme.colors.white};
		text-align: right;
		width: 100%;
		letter-spacing: ${theme.spacings.xxsmall}px;
	`}
`
