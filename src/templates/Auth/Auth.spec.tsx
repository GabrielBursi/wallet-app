import { screen, userEvent } from '@testing-library/react-native'

import { customRender } from '@/tests'
import { Input } from '@/components'

import { Auth } from '.'
import { AuthProps } from './types'
import { mockNavigation } from '@/tests/mocks'

describe('<Auth/>', () => {
	const onPressButtonMock = jest.fn()
	const onSignInSocialButtonMock = jest.fn()

	const props: AuthProps = {
		onPressButton: onPressButtonMock,
		onSignInSocialButton: onSignInSocialButtonMock,
		redirectTo: 'SignInScreen',
		spanRedirect: 'Are you testing?',
		textRedirect: 'Login',
		titleButton: 'Pass test',
		titleScreen: 'React testing library',
	}

	afterEach(() => jest.clearAllMocks())
	it('should render correctly', () => {
		customRender(<Auth {...props} />)

		expect(
			screen.getByRole('text', { name: /React testing library/i })
		).toBeOnTheScreen()
		expect(screen.getByRole('text', { name: /entrar com/i })).toBeOnTheScreen()
		expect(screen.getByRole('button', { name: /google/i })).toBeOnTheScreen()
		expect(screen.getByRole('button', { name: /facebook/i })).toBeOnTheScreen()
		expect(screen.getByRole('button', { name: /pass test/i })).toBeOnTheScreen()
		expect(
			screen.getByAccessibilityHint('ir para a página SignInScreen')
		).toBeOnTheScreen()
		expect(
			screen.getByRole('text', { name: /Are you testing?/i })
		).toBeOnTheScreen()
		expect(screen.getByRole('link', { name: /Login/i })).toBeOnTheScreen()
	})

	it('should render the inputs correctly', () => {
		customRender(
			<Auth {...props}>
				<Input
					iconLeft={{ name: 'book-outline' }}
					autoFocus
					placeholder="Primeiro campo"
				/>
				<Input placeholder="Segundo campo" />
				<Input placeholder="Terceiro campo" />
			</Auth>
		)

		expect(screen.getByPlaceholderText('Primeiro campo')).toBeOnTheScreen()
		expect(screen.getByPlaceholderText('Segundo campo')).toBeOnTheScreen()
		expect(screen.getByPlaceholderText('Terceiro campo')).toBeOnTheScreen()
	})

	it('should call the onPressButton prop when the form button is clicked', async () => {
		customRender(<Auth {...props} />)

		const button = screen.getByRole('button', { name: /pass test/i })
		await userEvent.press(button)
		expect(onPressButtonMock).toHaveBeenCalled()
	})

	it('should call the onSignInSocialButton when the social button is clicked', async () => {
		customRender(<Auth {...props} />)

		const button = screen.getByRole('button', { name: /google/i })
		await userEvent.press(button)
		expect(onSignInSocialButtonMock).toHaveBeenCalled()
	})

	it('should navigate to other screen when the redirect button is clicked', async () => {
		customRender(<Auth {...props} />)

		const buttonRedirect = screen.getByHintText(
			`ir para a página ${props.redirectTo}`
		)
		await userEvent.press(buttonRedirect)
		expect(mockNavigation.navigate).toHaveBeenCalledWith('SignInScreen')
	})
})
