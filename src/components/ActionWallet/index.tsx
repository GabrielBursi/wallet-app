import { GestureResponderEvent } from 'react-native'
import React, { memo, useCallback, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from 'styled-components/native'

import { ActionWalletProps } from './types'
import * as S from './styles'

const ActionWalletMemoized = ({
	icon,
	title,
	onPress,
	...rest
}: ActionWalletProps) => {
	const theme = useTheme()
	const [isPressed, setIsPressed] = useState(false)

	const handleOnPress = useCallback(
		(ev: GestureResponderEvent) => {
			onPress && onPress(ev)
		},
		[onPress]
	)

	const handleOnPressIn = useCallback(() => {
		setIsPressed(true)
	}, [])

	const handleOnPressOut = useCallback(() => {
		setIsPressed(false)
	}, [])

	return (
		<S.ActionWallet
			{...rest}
			accessibilityRole="button"
			accessibilityLabel={icon.name}
			accessibilityHint={`ir para ${title}`}
			onPress={handleOnPress}
			onPressOut={handleOnPressOut}
			onPressIn={handleOnPressIn}
		>
			<S.IconContainer
				onPress={handleOnPress}
				style={{ elevation: theme.elevation.medium }}
				activeOpacity={theme.opacity.low}
				underlayColor={theme.colors.shadow}
				onPressOut={handleOnPressOut}
				onPressIn={handleOnPressIn}
			>
				<Icon
					{...icon}
					name={icon.name}
					accessibilityRole="image"
					accessibilityLabel={icon.name}
					size={32}
					color={
						isPressed ? theme.colors.secondaryText : theme.colors.primaryText
					}
				/>
			</S.IconContainer>
			<S.Title accessibilityRole="text">{title}</S.Title>
		</S.ActionWallet>
	)
}

export const ActionWallet = memo(ActionWalletMemoized)
