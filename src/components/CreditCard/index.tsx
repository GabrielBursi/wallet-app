/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components/native'

import { CreditCardProps } from './types'
import * as S from './styles'

export const CreditCard = ({ date, name, number }: CreditCardProps) => {
	const [partsNumber, setPartsNumber] = useState<string[]>([])
	const theme = useTheme()

	useEffect(() => {
		const numberCardString = number.toString()
		const parts: string[] = []
		for (let i = 0; i < 4; i++) {
			parts.push(numberCardString.slice(i * 4, (i + 1) * 4))
		}

		setPartsNumber(parts)
	}, [number])

	return (
		<S.CreditCard style={{ elevation: theme.elevation.xlarge }}>
			<S.Container align="end">
				<S.ImageStyled
					source={require('../../assets/img/ship.png')}
					accessibilityRole="image"
					accessibilityLabel="ship credit card"
					alt="ship cartão de crédito"
					resizeMode="cover"
					testID="image-card"
				/>
			</S.Container>
			<S.Container>
				<S.NumberContainer>
					{partsNumber.map((number, index) => (
						<S.NumberCard accessibilityRole="text" key={`${number}-${index}`}>
							{number}
						</S.NumberCard>
					))}
				</S.NumberContainer>
				<S.NameCard
					accessibilityRole="text"
					numberOfLines={1}
					ellipsizeMode="tail"
				>
					{name}
				</S.NameCard>
				<S.DateCard accessibilityRole="text">{date}</S.DateCard>
			</S.Container>
			<S.Container>
				<S.ImageStyled
					source={require('../../assets/img/visa.png')}
					accessibilityRole="image"
					accessibilityLabel="logo visa"
					alt="logo visa"
					resizeMode="cover"
					testID="image-card"
				/>
			</S.Container>
		</S.CreditCard>
	)
}
