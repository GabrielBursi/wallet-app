/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css, DefaultTheme } from 'styled-components/native'
import { RuleSet } from 'styled-components/native/dist/types'
import normalize from 'react-native-normalize'

import { ButtonProps } from './types'

type ButtonStyledProps = Omit<ButtonProps, 'title' | 'onPress'>

type Key =
	| Extract<ButtonProps['type'], 'primary' | 'ghost'>
	| Extract<keyof ButtonProps, 'fullWidth' | 'icon'>

type Mappers = {
	[key in Key]: (theme: DefaultTheme) => RuleSet<object>
}

const mappers: Mappers = {
	primary: (theme) => css`
		background-color: ${theme.colors.primary};
	`,
	ghost: (theme) => css`
		background-color: ${theme.colors.mainBg};
		border-color: ${theme.colors.primary};
	`,
	fullWidth: () => css`
		width: 100%;
	`,
	icon: (theme) => css`
		gap: ${theme.spacings.xsmall}px;
	`,
}

export const TouchableContainer = styled.TouchableHighlight<
	Pick<ButtonProps, 'fullWidth'>
>`
	${({ theme, fullWidth = false }) => css`
		width: auto;
		border-radius: ${theme.border.radius.big}px;
		width: ${normalize(140)}px;
		${fullWidth && mappers.fullWidth(theme)};
	`}
`

export const ButtonContainer = styled.View<ButtonStyledProps>`
	${({ theme, type = 'primary', fullWidth = false, icon }) => css`
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: ${theme.spacings.small}px ${theme.spacings.xxsmall}px;
		border-radius: ${theme.border.radius.big}px;
		border-width: 1px;
		border-color: ${theme.colors.secondaryText};
		width: ${normalize(140)}px;

		${mappers[type](theme)}
		${fullWidth && mappers.fullWidth(theme)}
		${icon && mappers.icon(theme)}
	`}
`

export const Title = styled.Text<Pick<ButtonStyledProps, 'type'>>`
	${({ theme, type = 'primary' }) => css`
		color: ${type === 'primary' ? theme.colors.white : theme.colors.primary};
		font-family: ${theme.font.family.poppinsSemiBold};
		font-size: ${theme.font.sizes.medium}px;
		text-align: center;
		text-transform: capitalize;
	`}
`
