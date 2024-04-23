import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { RootStackParamList } from '@/types/routes'
import { SignInScreen, SignUpScreen } from '@/screens'

const Stack = createStackNavigator<RootStackParamList>()

export const StackRouter = () => {
	return (
		<Stack.Navigator
			initialRouteName="SignInScreen"
			screenOptions={{
				headerBackTitleVisible: false,
				headerShown: false,
			}}
		>
			<Stack.Screen name="SignInScreen" component={SignInScreen} />
			<Stack.Screen name="SignUpScreen" component={SignUpScreen} />
		</Stack.Navigator>
	)
}
