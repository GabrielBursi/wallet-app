import React, { PropsWithChildren } from 'react'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

import { Button, Container, SocialButton, TitleScreen } from '@/components'

import { AuthProps } from './types'
import * as S from './styles'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/routes'

export const Auth = ({
	onPressButton,
	redirectTo,
	spanRedirect,
	textRedirect,
	titleButton,
	titleScreen,
	children,
	onSignInSocialButton,
}: PropsWithChildren<AuthProps>) => {
	const theme = useTheme()
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>()

	return (
		<Container>
			<S.Auth>
				<TitleScreen title={titleScreen} />
				<S.BodyContainer>
					<S.Group>
						<S.SpanText accessibilityRole="text">Entrar com</S.SpanText>
						<S.SocialButtonsContainer>
							<SocialButton
								title="facebook"
								icon={{ name: 'logo-facebook', color: theme.colors.white }}
								color="blue"
								onPress={onSignInSocialButton}
							/>
							<SocialButton
								title="google"
								icon={{ name: 'logo-google' }}
								onPress={onSignInSocialButton}
							/>
						</S.SocialButtonsContainer>
					</S.Group>
					<S.InputsContainer>{children}</S.InputsContainer>
					<S.Group>
						<Button title={titleButton} onPress={onPressButton} />
						<S.TextRedirectContainer
							accessibilityRole="button"
							accessibilityLabel={`ir para ${redirectTo}`}
							accessibilityHint={`ir para a página ${redirectTo}`}
							onPress={() => navigation.navigate(redirectTo)}
						>
							<S.SpanText accessibilityRole="text">{spanRedirect}</S.SpanText>
							<S.LinkText accessibilityRole="link">{textRedirect}</S.LinkText>
						</S.TextRedirectContainer>
					</S.Group>
				</S.BodyContainer>
			</S.Auth>
		</Container>
	)
}
