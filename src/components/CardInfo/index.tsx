import React, { memo } from 'react'
import { CardInfoProps } from './types'
import * as S from './styles'
import { formatFloatToCurrency } from '@/functions'

const CardInfoMemoized = ({ balance, name }: CardInfoProps) => {
	const formattedBalance = formatFloatToCurrency(balance)

	return (
		<S.CardInfo style={{ elevation: 12 }}>
			<S.ColumnInfo flex={2}>
				<S.Label accessibilityRole="text">balance</S.Label>
				<S.ValueText
					accessibilityRole="text"
					numberOfLines={1}
					ellipsizeMode="tail"
				>
					{formattedBalance}
				</S.ValueText>
			</S.ColumnInfo>
			<S.ColumnInfo>
				<S.Label accessibilityRole="text">Card</S.Label>
				<S.ValueText
					accessibilityRole="text"
					numberOfLines={1}
					ellipsizeMode="tail"
				>
					{name}
				</S.ValueText>
			</S.ColumnInfo>
		</S.CardInfo>
	)
}

export const CardInfo = memo(CardInfoMemoized)
