import { screen, userEvent } from '@testing-library/react-native'

import { customRender } from '@/tests'

import { ButtonProps } from './types'
import { Button } from '.'

describe('<Button/>', () => {
	const onPressMock = jest.fn()
	const onLongPressMock = jest.fn()

	const buttonProps: ButtonProps = {
		title: 'jest',
		onPress: onPressMock,
	}

	afterEach(() => {
		jest.clearAllMocks()
	})

	it('should render a default button', () => {
		customRender(<Button {...buttonProps} />)

		expect(screen.getByTestId('button-container')).toHaveStyle({
			backgroundColor: '#5B259F',
		})
	})

	it('should render a ghost button', () => {
		customRender(<Button {...buttonProps} type="ghost" />)

		expect(screen.getByTestId('button-container')).toHaveStyle({
			backgroundColor: '#FFFFFF',
			borderColor: '#5B259F',
		})
	})

	it('should render a button with icon', () => {
		customRender(<Button {...buttonProps} icon={{ name: 'book-outline' }} />)

		expect(screen.getByRole('img', { name: /book-outline/i })).toBeOnTheScreen()
	})

	it('should render a button with full width', () => {
		customRender(<Button {...buttonProps} fullWidth />)

		expect(screen.getByRole('button', { name: /jest/i })).toHaveStyle({
			width: '100%',
		})
	})

	it('should call the onPress function correctly', async () => {
		customRender(<Button {...buttonProps} onPress={onPressMock} />)

		const button = screen.getByRole('button', { name: /jest/i })
		await userEvent.press(button)

		expect(onPressMock).toHaveBeenCalled()
	})

	it('should call the onLongPress function correctly', async () => {
		customRender(<Button {...buttonProps} onLongPress={onLongPressMock} />)

		const button = screen.getByRole('button', { name: /jest/i })
		await userEvent.longPress(button)

		expect(onLongPressMock).toHaveBeenCalled()
	})
})
