import { StatusBar } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { MMKVServices, initializeStorage } from '@/storage'
import { theme } from '@/styles'

export const AppProvider = ({ children }: PropsWithChildren) => {
	const queryClient = new QueryClient()

	initializeStorage(MMKVServices)

	return (
		<QueryClientProvider client={queryClient}>
			<NavigationContainer>
				<GestureHandlerRootView style={{ flex: 1 }}>
					<ThemeProvider theme={theme}>
						<SafeAreaProvider>
							<StatusBar
								barStyle="dark-content"
								backgroundColor="transparent"
								translucent
							/>
							{children}
						</SafeAreaProvider>
					</ThemeProvider>
				</GestureHandlerRootView>
			</NavigationContainer>
		</QueryClientProvider>
	)
}
