import { screen, userEvent } from '@testing-library/react-native'

import { customRender } from '@/tests'
import { mockNavigation, mockTransactions } from '@/tests/mocks'

import { LastTransactions } from '.'

describe('<LastTransactions/>', () => {
	it('should render correctly', () => {
		customRender(<LastTransactions transactions={mockTransactions} />)

		expect(
			screen.getByRole('text', { name: /últimas transações/i })
		).toBeOnTheScreen()
		expect(screen.getByRole('link', { name: /ver todas/i })).toBeOnTheScreen()
		expect(screen.getByRole('list')).toBeOnTheScreen()
		expect(screen.getAllByRole('listitem')).toHaveLength(3)
	})

	it('should filter the 3 last transactions correctly', () => {
		customRender(<LastTransactions transactions={mockTransactions} />)

		expect(
			screen.getByRole('listitem', { name: /presente para amigo/i })
		).toBeOnTheScreen()
		expect(
			screen.getByRole('listitem', { name: /economias/i })
		).toBeOnTheScreen()
		expect(
			screen.getByRole('listitem', { name: /transferência de sandra/i })
		).toBeOnTheScreen()
	})

	it('should navigate to transactions page correctly', async () => {
		customRender(<LastTransactions transactions={mockTransactions} />)

		const seeAll = screen.getByRole('link', { name: /ver todas/i })
		await userEvent.press(seeAll)
		expect(mockNavigation.navigate).toHaveBeenCalledWith('teste')
	})
})
