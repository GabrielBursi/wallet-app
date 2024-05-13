import React, { useCallback } from 'react'
import {
	ActionAccount,
	Container,
	SettingOption,
	TitleScreen,
} from '@/components'
import { ScreensType, SettingsScreenProps } from '@/types/screens'
import * as S from './styles'

export const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
	const handleOnPress = useCallback(
		(screens: ScreensType) => {
			navigation.navigate(screens)
		},
		[navigation]
	)

	const handleLogOut = useCallback(() => {
		console.log('logout')
	}, [])

	return (
		<Container>
			<S.Settings>
				<TitleScreen title="Configurações" />
				<S.ListContainer>
					<SettingOption
						icon={{ name: 'person-outline' }}
						title="perfil"
						onPress={() => handleOnPress('NotificationsScreen')}
					/>
					<SettingOption
						icon={{ name: 'notifications-outline' }}
						title="notificações"
						onPress={() => handleOnPress('NotificationsScreen')}
					/>
					<SettingOption
						icon={{ name: 'wallet-outline' }}
						title="sua carteira"
						onPress={() => handleOnPress('NotificationsScreen')}
					/>
					<SettingOption
						icon={{ name: 'key-outline' }}
						title="login"
						onPress={() => handleOnPress('NotificationsScreen')}
					/>
					<SettingOption
						icon={{ name: 'help-circle-outline' }}
						title="ajuda"
						onPress={() => handleOnPress('NotificationsScreen')}
					/>
				</S.ListContainer>
				<ActionAccount
					onPress={handleLogOut}
					title="sair"
					icon={{ name: 'log-out-outline' }}
				/>
			</S.Settings>
		</Container>
	)
}
