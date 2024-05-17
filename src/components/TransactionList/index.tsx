import React, { memo } from 'react'
import { FlashList } from '@shopify/flash-list'
import normalize from 'react-native-normalize'

import { EmptyList, TransactionItem } from '@/components'

import { TransactionListProps } from './types'
import * as S from './styles'

const TransactionListMemoized = ({
	transactions,
	refreshing,
	onRefresh,
}: TransactionListProps) => {
	return (
		<FlashList
			accessible
			role="list"
			accessibilityLabel="transações"
			data={transactions}
			renderItem={({ item }) => <TransactionItem {...item} />}
			keyExtractor={({ title }, index) => `${title}-${index}`}
			estimatedItemSize={normalize(60, 'height')}
			ItemSeparatorComponent={S.Separator}
			ListEmptyComponent={<EmptyList title="Você não possui transações" />}
			refreshing={refreshing}
			onRefresh={onRefresh}
			showsVerticalScrollIndicator={false}
		/>
	)
}

export const TransactionList = memo(TransactionListMemoized)
