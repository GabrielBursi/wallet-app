/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo, useCallback, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { LastTransactionsProps } from './types'
import * as S from './styles'

import { TransactionItem } from '@/components'
import { Transaction } from '@/types/app'

const LastTransactionsMemoized = ({ transactions }: LastTransactionsProps) => {
	const [linkIsPressed, setLinkIsPressed] = useState(false)
	const [lastTransactions, setLastTransactions] = useState<Transaction[]>([])
	const navigation = useNavigation()

	useEffect(() => {
		const lastTransactions = getLastTransactions(transactions)
		setLastTransactions(lastTransactions)
	}, [transactions])

	const getLastTransactions = useCallback(
		(transactions: Transaction[]) => {
			const sortedTransactions = transactions.sort(
				(a, b) => b.date.getTime() - a.date.getTime()
			)

			return sortedTransactions.slice(0, 3)
		},
		[transactions]
	)

	const handleOnPressIn = useCallback(() => {
		setLinkIsPressed(true)
	}, [])

	const handleOnPressOut = useCallback(() => {
		setLinkIsPressed(false)
	}, [])

	return (
		<S.LastTransactions>
			<S.TitleContainer>
				<S.Title accessibilityRole="text">Últimas transações</S.Title>
				<S.LinkContainer
					onPressIn={handleOnPressIn}
					onPressOut={handleOnPressOut}
					onPress={() => navigation.navigate('teste')}
				>
					<S.Link
						accessibilityRole="link"
						accessibilityHint="ir para a tela de todas transações"
						isPressed={linkIsPressed}
					>
						Ver todas
					</S.Link>
				</S.LinkContainer>
			</S.TitleContainer>
			<S.TransactionsContainer
				accessible
				accessibilityRole="list"
				accessibilityLabel="Últimas transações"
			>
				{lastTransactions.map(({ date, ...transaction }, index) => (
					<TransactionItem
						key={`${transaction.title}-${index}`}
						{...transaction}
					/>
				))}
			</S.TransactionsContainer>
		</S.LastTransactions>
	)
}

export const LastTransactions = memo(LastTransactionsMemoized)
