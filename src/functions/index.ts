export const formatFloatToCurrency = (value: number) => {
	const currencyFormat = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	})

	const formattedValue = currencyFormat.format(value)
	return formattedValue
}
