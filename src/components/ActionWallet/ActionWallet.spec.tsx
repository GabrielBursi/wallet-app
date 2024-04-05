import { screen, userEvent } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { ActionWallet } from '.'
import { ActionWalletProps } from './types'

describe('<ActionWallet/>', () => {
	const props: ActionWalletProps = {
		icon: { name: 'earth-outline' },
		title: 'jest',
	}

	const onPressMock = jest.fn()

	afterEach(() => jest.clearAllMocks())

	it('should render correctly', () => {
		customRender(<ActionWallet {...props} />)

		expect(screen.getByRole('button', { name: /jest/i })).toBeOnTheScreen()
		expect(screen.getByRole('text', { name: /jest/i })).toBeOnTheScreen()
		expect(
			screen.getByRole('image', { name: /earth-outline/i })
		).toBeOnTheScreen()
	})

	it('should render call the onPress correctly', async () => {
		customRender(<ActionWallet {...props} onPress={onPressMock} />)

		await userEvent.press(screen.getByRole('button', { name: /jest/i }))
		expect(onPressMock).toHaveBeenCalled()
	})
})
