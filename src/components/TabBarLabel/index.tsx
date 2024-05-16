import React from 'react'
import { TabBarLabelProps } from './types'
import * as S from './styles'

export const TabBarLabel = ({ label }: TabBarLabelProps) => {
	return (
		<S.TabBarLabel accessibilityRole="text" accessibilityLabel={label}>
			{label}
		</S.TabBarLabel>
	)
}
