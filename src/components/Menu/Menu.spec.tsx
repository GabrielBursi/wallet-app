import { screen, userEvent } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { Menu } from '.'
import { mockNavigation } from '@/tests/mocks'

describe('<Menu/>', () => {
	it('should render correctly', () => {
		customRender(<Menu />)

		expect(screen.getByRole('menu')).toBeOnTheScreen()
		expect(screen.getAllByRole('menuitem')).toHaveLength(4)
	})

	it('should navigate to the right screen correctly when the first button is pressed', async () => {
		customRender(<Menu />)

		const button = screen.getByRole('menuitem', { name: /adicionar/i })
		await userEvent.press(button)
		expect(mockNavigation.navigate).toHaveBeenCalledWith('teste')
	})

	it('should navigate to the right screen correctly when the second button is pressed', async () => {
		customRender(<Menu />)

		const button = screen.getByRole('menuitem', { name: /cartão/i })
		await userEvent.press(button)
		expect(mockNavigation.navigate).toHaveBeenCalledWith('teste')
	})

	it('should navigate to the right screen correctly when the third button is pressed', async () => {
		customRender(<Menu />)

		const button = screen.getByRole('menuitem', { name: /pagar/i })
		await userEvent.press(button)
		expect(mockNavigation.navigate).toHaveBeenCalledWith('teste')
	})

	it('should navigate to the right screen correctly when the fourth button is pressed', async () => {
		customRender(<Menu />)

		const button = screen.getByRole('menuitem', { name: /transferir/i })
		await userEvent.press(button)
		expect(mockNavigation.navigate).toHaveBeenCalledWith('teste')
	})
})
