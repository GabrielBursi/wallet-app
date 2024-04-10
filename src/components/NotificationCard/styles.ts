/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'
import normalize from 'react-native-normalize'

export const NotificationCard = styled.View`
	${({ theme }) => css`
		flex-direction: row;
		justify-content: space-between;
		gap: ${theme.spacings.xsmall}px;
		background-color: ${theme.colors.mainBg};
		border-radius: ${theme.border.radius.big}px;
		position: relative;
		height: ${normalize(125)}px;
		padding: ${theme.spacings.xsmall}px ${theme.spacings.small}px;
	`}
`

export const IsNewContainer = styled.View`
	${({ theme }) => css`
		position: absolute;
		top: 1px;
		right: 1px;
		background-color: ${theme.colors.red};
		width: ${theme.spacings.xsmall}px;
		height: ${theme.spacings.xsmall}px;
		border-radius: ${theme.border.radius.big}px;
	`}
`

export const Content = styled.View`
	${({ theme }) => css`
		gap: ${theme.spacings.xxsmall}px;
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
		font-size: ${theme.font.sizes.small}px;
		font-family: ${theme.font.family.poppinsLight};
		letter-spacing: ${normalize(1)}px;
	`}
`

export const DescriptionText = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.normalText};
		font-size: ${theme.font.sizes.xsmall}px;
		font-family: ${theme.font.family.poppinsLight};
		letter-spacing: ${normalize(1)}px;
	`}
`

export const Title = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.primaryText};
		font-size: ${theme.font.sizes.medium}px;
		font-family: ${theme.font.family.poppinsRegular};
	`}
`
