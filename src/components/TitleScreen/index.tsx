import React, { memo } from 'react'
import { TitleScreenProps } from './types'
import * as S from './styles'

const TitleScreenMemoized = ({ title }: TitleScreenProps) => {
	return <S.TitleScreen accessibilityRole="text">{title}</S.TitleScreen>
}

export const TitleScreen = memo(TitleScreenMemoized)
