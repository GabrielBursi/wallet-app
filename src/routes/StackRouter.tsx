import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { RootStackParamList } from '@/types/routes'
import { Home } from '@/screens'

const Stack = createStackNavigator<RootStackParamList>()

export const StackRouter = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	)
}
