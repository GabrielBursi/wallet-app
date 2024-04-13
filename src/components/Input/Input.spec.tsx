import { screen, userEvent } from '@testing-library/react-native'

import { customRender } from '@/tests'
import { theme } from '@/styles'

import { InputProps } from './types'

import { Input } from '.'

describe('<Input/>', () => {
	const onPressIconLeft = jest.fn()
	const onPressIconRight = jest.fn()

	const props: InputProps = {
		iconLeft: {
			name: 'beaker-outline',
			onPress: onPressIconLeft,
		},
		iconRight: {
			name: 'star-outline',
			onPress: onPressIconRight,
		},
	}

	afterEach(() => jest.clearAllMocks())

	it('should render a default text input correctly', () => {
		customRender(<Input placeholder="Digite aqui" />)

		expect(screen.getByPlaceholderText('Digite aqui')).toBeOnTheScreen()
	})

	it('should render a text input with two icons correctly', () => {
		customRender(
			<Input accessibilityLabel="jest" placeholder="Digite aqui" {...props} />
		)

		expect(screen.getByLabelText(/jest/i)).toBeOnTheScreen()
		expect(
			screen.getByRole('button', { name: 'beaker-outline' })
		).toBeOnTheScreen()
		expect(
			screen.getByRole('button', { name: 'star-outline' })
		).toBeOnTheScreen()
	})

	it('should render a text input with default value correctly', () => {
		customRender(<Input defaultValue="rtl" {...props} />)

		expect(screen.getByDisplayValue('rtl')).toBeOnTheScreen()
	})

	it("should call the icons' onPress function correctly", async () => {
		customRender(<Input accessibilityLabel="icons" {...props} />)

		const iconLeft = screen.getByRole('image', {
			name: 'beaker-outline',
		})
		const iconRight = screen.getByRole('image', { name: 'star-outline' })

		await userEvent.press(iconLeft)
		expect(onPressIconLeft).toHaveBeenCalled()
		await userEvent.press(iconRight)
		expect(onPressIconRight).toHaveBeenCalled()
	})

	it('should focus the text input when the container is pressed correctly', async () => {
		customRender(<Input accessibilityLabel="focus" {...props} />)

		await userEvent.press(screen.getByTestId('input-container'))
		expect(screen.getByTestId('input-container')).toHaveAccessibilityState({
			busy: undefined,
			checked: undefined,
			disabled: undefined,
			expanded: undefined,
			selected: true,
		})
		expect(screen.getByTestId('input-container')).toHaveStyle({
			borderColor: theme.colors.primary,
			borderWidth: 1.5,
		})
		expect(screen.getByLabelText('focus')).toHaveAccessibilityState({
			busy: undefined,
			checked: undefined,
			disabled: undefined,
			expanded: undefined,
			selected: true,
		})
	})

	it('should focus the text input when the left icon is pressed correctly', async () => {
		customRender(<Input accessibilityLabel="focus" {...props} />)

		await userEvent.press(screen.getByRole('image', { name: 'beaker-outline' }))
		expect(screen.getByTestId('input-container')).toHaveAccessibilityState({
			busy: undefined,
			checked: undefined,
			disabled: undefined,
			expanded: undefined,
			selected: true,
		})
		expect(screen.getByTestId('input-container')).toHaveStyle({
			borderColor: theme.colors.primary,
			borderWidth: 1.5,
		})
		expect(screen.getByLabelText('focus')).toHaveAccessibilityState({
			busy: undefined,
			checked: undefined,
			disabled: undefined,
			expanded: undefined,
			selected: true,
		})
	})

	it('should focus the text input when the right icon is pressed correctly', async () => {
		customRender(<Input accessibilityLabel="focus" {...props} />)

		await userEvent.press(screen.getByRole('image', { name: 'star-outline' }))
		expect(screen.getByTestId('input-container')).toHaveAccessibilityState({
			busy: undefined,
			checked: undefined,
			disabled: undefined,
			expanded: undefined,
			selected: true,
		})
		expect(screen.getByTestId('input-container')).toHaveStyle({
			borderColor: theme.colors.primary,
			borderWidth: 1.5,
		})
		expect(screen.getByLabelText('focus')).toHaveAccessibilityState({
			busy: undefined,
			checked: undefined,
			disabled: undefined,
			expanded: undefined,
			selected: true,
		})
	})

	it('should focus and blur the text input correctly', async () => {
		customRender(<Input accessibilityLabel="focus" {...props} />)

		await userEvent.type(screen.getByTestId('input-component'), 'test focus', {
			skipPress: true,
		})

		expect(screen.getByTestId('input-container')).toHaveAccessibilityState({
			busy: undefined,
			checked: undefined,
			disabled: undefined,
			expanded: undefined,
			selected: false,
		})
		expect(screen.getByLabelText('focus')).toHaveAccessibilityState({
			busy: undefined,
			checked: undefined,
			disabled: undefined,
			expanded: undefined,
			selected: false,
		})
	})
})
