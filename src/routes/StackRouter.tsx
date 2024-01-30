import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens';
import { RootStackParamList } from '../types/routes';

const Stack = createStackNavigator<RootStackParamList>();

export const StackRouter = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}
