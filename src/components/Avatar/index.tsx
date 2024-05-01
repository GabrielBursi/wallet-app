import React, { memo, useCallback, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { AvatarProps } from './types'
import * as S from './styles'
import DefaultUser from '../../assets/img/default-user.png'

import { UserServices } from '@/api/services'
import { User } from '@/types/api'

const AvatarMemoized = ({
	username,
	size = 'normal',
	...props
}: AvatarProps) => {
	const navigation = useNavigation()
	const [userData, setUserData] = useState<User>()

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		;(async () => await getUserData())()
	}, [username])

	const getUserData = useCallback(async () => {
		const userData = await UserServices.GetUser(username)

		if (userData instanceof Error) return

		setUserData(userData)
	}, [username])

	return (
		<S.PressableContainer
			accessible
			accessibilityRole="button"
			accessibilityLabel={username}
			accessibilityHint={`ir para a página do perfil ${username}`}
			onPress={() => navigation.navigate('teste')}
		>
			<S.Avatar
				{...props}
				accessible
				accessibilityRole="image"
				accessibilityLabel={username}
				alt={`avatar do usuário ${username}`}
				width={size === 'normal' ? 75 : 45}
				height={size === 'normal' ? 75 : 45}
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				defaultSource={DefaultUser}
				source={{
					uri: userData?.avatar_url,
				}}
			/>
		</S.PressableContainer>
	)
}

export const Avatar = memo(AvatarMemoized)
