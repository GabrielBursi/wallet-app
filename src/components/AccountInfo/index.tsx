import React from 'react'
import { AccountInfoProps } from './types'
import * as S from './styles'

export const AccountInfo = ({ text, title }: AccountInfoProps) => {
	return (
		<S.AccountInfo>
			<S.Title accessibilityRole="text" numberOfLines={1} ellipsizeMode="tail">
				{title}
			</S.Title>
			<S.Text accessibilityRole="text" numberOfLines={1} ellipsizeMode="tail">
				{text}
			</S.Text>
		</S.AccountInfo>
	)
}
