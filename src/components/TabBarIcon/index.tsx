import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from 'styled-components/native'

import { TabBarIconProps } from './types'

export const TabBarIcon = ({
	accessibilityHint,
	accessibilityLabel,
	focused,
	size,
	icon,
	iconFocused,
}: TabBarIconProps) => {
	const theme = useTheme()

	return (
		<Icon
			name={focused ? iconFocused : icon}
			accessibilityLabel={accessibilityLabel}
			testID={focused ? iconFocused : icon}
			accessibilityRole="image"
			accessibilityState={{
				selected: focused,
			}}
			accessibilityHint={accessibilityHint}
			accessible
			size={size}
			color={theme.colors.white}
		/>
	)
}
