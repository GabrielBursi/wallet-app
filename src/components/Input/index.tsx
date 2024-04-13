import React, { memo, useEffect, useRef, useState } from 'react'
import { useTheme } from 'styled-components/native'
import { TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { InputProps } from './types'
import * as S from './styles'

const InputMemoized = ({
	iconLeft,
	iconRight,
	...restInputProps
}: InputProps) => {
	const theme = useTheme()

	const [hasFocus, setHasFocus] = useState(false)

	const inputRef = useRef<TextInput>(null)

	useEffect(() => {
		if (hasFocus && inputRef.current) inputRef.current.focus()
	}, [hasFocus])

	return (
		<S.InputContainer
			onPress={() => setHasFocus(true)}
			hasFocus={hasFocus}
			style={{ elevation: theme.elevation.medium }}
			accessibilityState={{
				selected: hasFocus,
			}}
			testID="input-container"
		>
			{iconLeft && (
				<S.IconContainer
					accessibilityRole="button"
					accessibilityLabel={iconLeft.name}
					accessibilityHint={`clicar em ${iconLeft.name}`}
				>
					<Icon
						{...iconLeft}
						name={iconLeft.name}
						onPressIn={() => setHasFocus(true)}
						color={hasFocus ? theme.colors.primary : theme.colors.normalText}
						size={25}
						accessibilityRole="image"
						accessibilityLabel={iconLeft.name}
						accessibilityState={{
							selected: hasFocus,
						}}
						aria-selected={hasFocus}
						importantForAccessibility="yes"
					/>
				</S.IconContainer>
			)}
			<S.Input
				{...restInputProps}
				ref={inputRef}
				testID="input-component"
				onFocus={() => setHasFocus(true)}
				onBlur={() => setHasFocus(false)}
				placeholderTextColor={theme.colors.normalText}
				accessibilityState={{
					selected: hasFocus,
				}}
			/>
			{iconRight && (
				<S.IconContainer
					accessibilityRole="button"
					accessibilityLabel={iconRight.name}
					accessibilityHint={`clicar em ${iconRight.name}`}
				>
					<Icon
						{...iconRight}
						onPressIn={() => setHasFocus(true)}
						name={iconRight.name}
						color={hasFocus ? theme.colors.primary : theme.colors.normalText}
						size={25}
						accessibilityRole="image"
						accessibilityLabel={iconRight.name}
						accessibilityState={{
							selected: hasFocus,
						}}
						aria-selected={hasFocus}
						importantForAccessibility="yes"
					/>
				</S.IconContainer>
			)}
		</S.InputContainer>
	)
}

export const Input = memo(InputMemoized)
