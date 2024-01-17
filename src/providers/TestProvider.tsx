import React, { PropsWithChildren } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GlobalStyles } from '../styles';

export const TestProvider = ({ children }: PropsWithChildren) => {

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <GlobalStyles />
                <SafeAreaProvider
                    initialMetrics={{
                        frame: { x: 0, y: 0, width: 0, height: 0 },
                        insets: { top: 0, left: 0, right: 0, bottom: 0 },
                    }}
                >
                    {children}
                </SafeAreaProvider>
            </NavigationContainer>
        </QueryClientProvider>
    )
}
