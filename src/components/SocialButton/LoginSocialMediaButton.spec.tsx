import { screen, userEvent } from '@testing-library/react-native'

import { customRender } from '@/tests'

import { SocialButton } from '.'
import { SocialButtonProps } from './types'

describe('<SocialButton/>', () => {
	const onPressMock = jest.fn()

	const buttonProps: SocialButtonProps = {
		title: 'jest',
		icon: { name: 'google' },
		onPress: onPressMock,
	}

	afterEach(() => jest.clearAllMocks())

	it('should render the button correctly', () => {
		customRender(<SocialButton {...buttonProps} />)

		expect(screen.getByRole('button', { name: /jest/i })).toBeOnTheScreen()
		expect(screen.getByRole('img', { name: /google/i })).toBeOnTheScreen()
	})

	it('should render the button with custom color correctly', () => {
		customRender(<SocialButton {...buttonProps} color="blue" />)

		expect(screen.getByTestId('button-container')).toHaveStyle({
			backgroundColor: '#4368c7',
		})
	})

	it('should call the onPress function correctly', async () => {
		customRender(<SocialButton {...buttonProps} />)

		const button = screen.getByRole('button', { name: /jest/i })
		await userEvent.press(button)

		expect(onPressMock).toHaveBeenCalled()
	})
})
