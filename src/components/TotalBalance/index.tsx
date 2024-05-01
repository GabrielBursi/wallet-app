import React, { memo } from 'react'
import { TotalBalanceProps } from './types'
import * as S from './styles'

import { formatFloatToCurrency } from '@/functions'

const TotalBalanceMemoized = ({ balance }: TotalBalanceProps) => {
	const balanceFormatted = formatFloatToCurrency(balance)

	return (
		<S.TotalBalance>
			<S.Title accessibilityRole="text">Balanço Total</S.Title>
			<S.BalanceText accessibilityRole="text">{balanceFormatted}</S.BalanceText>
		</S.TotalBalance>
	)
}

export const TotalBalance = memo(TotalBalanceMemoized)
