import { screen, userEvent } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { TitleTransactionsList } from '.'

describe('<TitleTransactionsList/>', () => {
	const onToggleMock = jest.fn()

	afterEach(() => jest.clearAllMocks())

	it('should render the all title correctly', () => {
		customRender(<TitleTransactionsList onToggle={onToggleMock} type="all" />)

		expect(screen.getByRole('text', { name: /transações/i })).toBeOnTheScreen()
		expect(
			screen.getByRole('button', { name: /Ver Últimas/i })
		).toBeOnTheScreen()
	})

	it('should render the last title correctly', () => {
		customRender(<TitleTransactionsList onToggle={onToggleMock} type="last" />)

		expect(
			screen.getByRole('text', { name: /últimas transações/i })
		).toBeOnTheScreen()
		expect(screen.getByRole('button', { name: /Ver todas/i })).toBeOnTheScreen()
	})

	it('should call onToggle correctly', async () => {
		customRender(<TitleTransactionsList onToggle={onToggleMock} type="last" />)

		const button = screen.getByRole('button', { name: /Ver todas/i })
		await userEvent.press(button)
		expect(onToggleMock).toHaveBeenCalled()
	})
})
