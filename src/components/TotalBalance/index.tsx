import React from 'react'
import { TotalBalanceProps } from './types'
import * as S from './styles'

import { formatFloatToCurrency } from '@/functions'

export const TotalBalance = ({ balance }: TotalBalanceProps) => {
	const balanceFormatted = formatFloatToCurrency(balance)

	return (
		<S.TotalBalance>
			<S.Title accessibilityRole="text">Balanço Total</S.Title>
			<S.BalanceText accessibilityRole="text">{balanceFormatted}</S.BalanceText>
		</S.TotalBalance>
	)
}
