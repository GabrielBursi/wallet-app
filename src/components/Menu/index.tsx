import React from 'react'
import * as S from './styles'

import { ActionWallet } from '@/components'
import { useNavigation } from '@react-navigation/native'

export const Menu = () => {
	const navigation = useNavigation()

	return (
		<S.Menu accessible accessibilityRole="menu">
			<ActionWallet
				onPress={() => navigation.navigate('teste')}
				title="Adicionar"
				icon={{ name: 'add-circle-outline' }}
				role="menuitem"
			/>
			<ActionWallet
				onPress={() => navigation.navigate('teste')}
				title="Transações"
				icon={{ name: 'reader-outline' }}
				role="menuitem"
			/>
			<ActionWallet
				onPress={() => navigation.navigate('teste')}
				title="Pagar"
				icon={{ name: 'cash-outline' }}
				role="menuitem"
			/>
			<ActionWallet
				onPress={() => navigation.navigate('teste')}
				title="Transferir"
				icon={{ name: 'arrow-up-circle-outline' }}
				role="menuitem"
			/>
		</S.Menu>
	)
}
