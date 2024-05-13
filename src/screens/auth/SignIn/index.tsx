import React from 'react'
import { KeyboardAvoidingView } from 'react-native'

import { Input } from '@/components'
import { Auth } from '@/templates'

import * as S from './styles'

export const SignInScreen = () => {
	return (
		<S.SignIn>
			<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
				<Auth
					onPressButton={() => console.log('SignIn!')}
					onSignInSocialButton={() => console.log('SignIn with social medias!')}
					redirectTo="SignUpScreen"
					spanRedirect="Não tem conta?"
					textRedirect="Criar Conta"
					titleButton="Entrar"
					titleScreen="Bem vindo de volta ao WalletApp"
				>
					<Input
						placeholder="Email"
						accessibilityLabel="Email"
						inputMode="email"
						keyboardType="email-address"
						iconLeft={{
							name: 'mail-outline',
						}}
					/>
					<Input
						placeholder="Senha"
						accessibilityLabel="Senha"
						secureTextEntry
						iconLeft={{
							name: 'lock-closed-outline',
						}}
						iconRight={{
							name: 'eye-outline',
						}}
					/>
				</Auth>
			</KeyboardAvoidingView>
		</S.SignIn>
	)
}
