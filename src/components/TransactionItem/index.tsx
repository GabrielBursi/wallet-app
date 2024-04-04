import React, { memo } from 'react'
import { TransactionItemProps } from './types'
import * as S from './styles'

const TransactionItemMemoized = ({
	title,
	value,
	description,
	image,
}: TransactionItemProps) => {
	const currencyFormat = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	})

	const formattedValue = currencyFormat.format(value)

	return (
		<S.TransactionItem>
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
