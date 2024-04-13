/* eslint-disable @typescript-eslint/no-unused-vars */
import { darken } from 'polished'
import { TextInput } from 'react-native'
import { styled, css, DefaultTheme } from 'styled-components/native'
import { RuleSet } from 'styled-components/native/dist/types'

type InputStyled = {
	hasFocus?: boolean
}

type Key = Extract<keyof InputStyled, 'hasFocus'>

type Mappers = {
	[key in Key]: (theme: DefaultTheme) => RuleSet<object>
}

const mappers: Mappers = {
	hasFocus: (theme) => css`
		border-width: 1.5px;
		border-color: ${theme.colors.primary};
	`,
}

export const InputContainer = styled.Pressable<InputStyled>`
	${({ theme, hasFocus = false }) => css`
		border-radius: ${theme.border.radius.medium}px;
		background-color: ${theme.colors.secondaryBg};
		padding: ${theme.spacings.xsmall}px;
		flex-direction: row;
		align-items: center;
		gap: ${theme.spacings.xsmall}px;
		border-width: 1px;
		border-color: ${darken(0.2, theme.colors.mainBg)};

		${hasFocus && mappers['hasFocus'](theme)}
	`}
`

export const Input = styled(TextInput)`
	${({ theme }) => css`
		flex: 1;
		color: ${darken(0.2, theme.colors.normalText)};
		font-family: ${theme.font.family.poppinsSemiBold};
		font-size: ${theme.font.sizes.medium}px;
	`}
`

export const IconContainer = styled.Pressable`
	${({ theme }) => css`
		justify-content: center;
		align-items: center;
		width: ${theme.spacings.large}px;
		height: ${theme.spacings.large}px;
	`}
`
