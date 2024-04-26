import React, { memo } from 'react'

import { TransactionItemProps } from './types'
import * as S from './styles'

import { formatFloatToCurrency } from '@/functions'

const TransactionItemMemoized = ({
	title,
	value,
	description,
	image,
}: TransactionItemProps) => {
	const formattedValue = formatFloatToCurrency(value)

	return (
		<S.TransactionItem accessible role="listitem" accessibilityLabel={title}>
			<S.Content>
				{!!image && (
					<S.ImageIcon
						role="img"
						accessibilityRole="image"
						source={image}
						alt="imagem transação"
						testID="image-icon"
					/>
				)}
				<S.TitleContainer>
					<S.Title
						accessibilityRole="text"
						ellipsizeMode="tail"
						numberOfLines={1}
					>
						{title}
					</S.Title>
					{!!description && (
						<S.Description
							accessibilityRole="text"
							ellipsizeMode="tail"
							numberOfLines={1}
						>
							{description}
						</S.Description>
					)}
				</S.TitleContainer>
			</S.Content>
			<S.ValueContainer>
				<S.ValueText accessibilityRole="text">{formattedValue}</S.ValueText>
			</S.ValueContainer>
		</S.TransactionItem>
	)
}

export const TransactionItem = memo(TransactionItemMemoized)
