/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'

export const Avatar = styled.Image`
	${({ theme }) => css`
		border-radius: ${theme.border.radius.big}px;
	`}
`

export const PressableContainer = styled.Pressable`
	justify-content: center;
	align-items: center;
`
