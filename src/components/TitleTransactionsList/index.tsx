import React, { memo, useCallback, useState } from 'react'
import { TitleTransactionsListProps } from './types'
import * as S from './styles'

const TitleTransactionsListMemoized = ({
	onToggle,
	type,
}: TitleTransactionsListProps) => {
	const [textIsPressed, setTextIsPressed] = useState(false)

	const titleText = type === 'all' ? 'Transações' : 'Últimas transações'
	const buttonText = type === 'all' ? 'Ver Últimas' : 'Ver todas'

	const handleOnPressIn = useCallback(() => {
		setTextIsPressed(true)
	}, [])

	const handleOnPressOut = useCallback(() => {
		setTextIsPressed(false)
	}, [])

	return (
		<S.TitleTransactionsList>
			<S.Title accessibilityRole="text">{titleText}</S.Title>
			<S.ActionContainer
				accessible
				accessibilityRole="button"
				accessibilityLabel={buttonText}
				onPressIn={handleOnPressIn}
				onPressOut={handleOnPressOut}
				onPress={onToggle}
			>
				<S.ActionText isPressed={textIsPressed} accessibilityRole="text">
					{buttonText}
				</S.ActionText>
			</S.ActionContainer>
		</S.TitleTransactionsList>
	)
}

export const TitleTransactionsList = memo(TitleTransactionsListMemoized)
