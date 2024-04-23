/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'

export const Auth = styled.View`
	${({ theme }) => css`
		align-items: center;
		gap: ${theme.spacings.xlarge}px;
		flex: 1;
		padding-top: ${theme.spacings.xxlarge}px;
	`}
`
export const BodyContainer = styled.View`
	${({ theme }) => css`
		flex: 1;
		align-items: center;
		gap: ${theme.spacings.large}px;
		width: 100%;
	`}
`

export const Group = styled.View`
	${({ theme }) => css`
		align-items: center;
		gap: ${theme.spacings.xxsmall}px;
		width: 100%;
	`}
`

export const InputsContainer = styled.View`
	${({ theme }) => css`
		align-items: center;
		gap: ${theme.spacings.small}px;
		width: 100%;
	`}
`

export const SpanText = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.small}px;
		color: ${theme.colors.normalText};
		font-family: ${theme.font.family.poppinsRegular};
	`}
`

export const SocialButtonsContainer = styled.View`
	${({ theme }) => css`
		flex-direction: row;
		align-items: center;
		gap: ${theme.spacings.small}px;
		justify-content: center;
		width: 100%;
	`}
`

export const TextRedirectContainer = styled.Pressable`
	${({ theme }) => css`
		flex-direction: row;
		align-items: center;
		gap: ${theme.spacings.xsmall}px;
		padding: ${theme.spacings.xxsmall}px;
	`}
`

export const LinkText = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.small}px;
		color: ${theme.colors.secondaryText};
		font-family: ${theme.font.family.poppinsRegular};
	`}
`
