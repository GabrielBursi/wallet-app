import React from 'react'
import { TitleScreenProps } from './types'
import * as S from './styles'

export const TitleScreen = ({ title }: TitleScreenProps) => {
	return <S.TitleScreen accessibilityRole="text">{title}</S.TitleScreen>
}
