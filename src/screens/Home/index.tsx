import React from 'react'
import { Text } from 'react-native'

import * as S from './styles'
import { HomeProps } from '@/types/screens'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const HomeScreen = ({ navigation, route }: HomeProps) => {
	return (
		<S.Home>
			<Text accessibilityRole="text">Home</Text>
		</S.Home>
	)
}
