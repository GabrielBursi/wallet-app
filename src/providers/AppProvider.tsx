import React, { PropsWithChildren } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GlobalStyles } from '@/styles';

export const AppProvider = ({ children }: PropsWithChildren) => {

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                {/* <GlobalStyles/> */}
                <SafeAreaProvider>
                    {children}
                </SafeAreaProvider>
            </NavigationContainer>
        </QueryClientProvider>
    )
}
