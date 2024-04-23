import React from 'react'
import { KeyboardAvoidingView } from 'react-native'

import { Auth } from '@/templates'
import { Input } from '@/components'

import * as S from './styles'

export const SignUpScreen = () => {
	return (
		<S.SignUp>
			<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
				<Auth
					onPressButton={() => console.log('SignUp!')}
					onSignInSocialButton={() => console.log('SignUp with social medias!')}
					redirectTo="SignInScreen"
					spanRedirect="Já tem conta?"
					textRedirect="Login"
					titleButton="Criar"
					titleScreen="Crie sua conta na WalletApp agora mesmo!"
				>
					<Input
						placeholder="Nome de usuário"
						accessibilityLabel="Nome de usuário"
						inputMode="text"
						iconLeft={{
							name: 'person-outline',
						}}
					/>
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
		</S.SignUp>
	)
}
