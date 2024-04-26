import { screen, userEvent } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { Menu } from '.'
import { mockNavigation } from '@/tests/mocks'

describe('<Menu/>', () => {
	it('should render correctly', () => {
		customRender(<Menu />)

		expect(screen.getByRole('button', { name: /adicionar/i })).toBeOnTheScreen()
		expect(
			screen.getByRole('button', { name: /transações/i })
		).toBeOnTheScreen()
		expect(screen.getByRole('button', { name: /pagar/i })).toBeOnTheScreen()
		expect(
			screen.getByRole('button', { name: /transferir/i })
		).toBeOnTheScreen()
	})

	it('should navigate to the right screen correctly when the first button is pressed', async () => {
		customRender(<Menu />)

		const button = screen.getByRole('button', { name: /adicionar/i })
		await userEvent.press(button)
		expect(mockNavigation.navigate).toHaveBeenCalledWith('teste')
	})

	it('should navigate to the right screen correctly when the second button is pressed', async () => {
		customRender(<Menu />)

		const button = screen.getByRole('button', { name: /transações/i })
		await userEvent.press(button)
		expect(mockNavigation.navigate).toHaveBeenCalledWith('teste')
	})

	it('should navigate to the right screen correctly when the third button is pressed', async () => {
		customRender(<Menu />)

		const button = screen.getByRole('button', { name: /pagar/i })
		await userEvent.press(button)
		expect(mockNavigation.navigate).toHaveBeenCalledWith('teste')
	})

	it('should navigate to the right screen correctly when the fourth button is pressed', async () => {
		customRender(<Menu />)

		const button = screen.getByRole('button', { name: /transferir/i })
		await userEvent.press(button)
		expect(mockNavigation.navigate).toHaveBeenCalledWith('teste')
	})
})
