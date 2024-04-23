import { ScreensType } from '@/types/screens'

/* eslint-disable @typescript-eslint/ban-types */
export type AuthProps = {
	titleScreen: string
	titleButton: string
	onPressButton: () => void
	spanRedirect: string
	textRedirect: 'Login' | 'Criar Conta'
	redirectTo: Extract<ScreensType, 'SignInScreen' | 'SignUpScreen'>
	onSignInSocialButton: () => void
}
