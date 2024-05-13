import { screen, userEvent } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { mockNavigation } from '@/tests/mocks'
import { SignUpScreen } from '.'

describe('<SignUpScreen/>', () => {
	it('should render correctly', () => {
		customRender(<SignUpScreen />)

		expect(screen.getByLabelText(/email/i)).toBeOnTheScreen()
		expect(screen.getByLabelText(/senha/i)).toBeOnTheScreen()
		expect(screen.getByLabelText(/nome de usuário/i)).toBeOnTheScreen()
		expect(screen.getByRole('link', { name: /login/i })).toBeOnTheScreen()
	})

	it.skip('should signUp with social media correctly', () => {
		customRender(<SignUpScreen />)

		expect(true).toBe(false)
	})

	it.skip('should signUp correctly', () => {
		customRender(<SignUpScreen />)

		expect(true).toBe(false)
	})

	it('should navigate to signIn screen  correctly', async () => {
		customRender(<SignUpScreen />)

		const buttonRedirect = screen.getByHintText(`ir para a página SignInScreen`)
		await userEvent.press(buttonRedirect)
		expect(mockNavigation.navigate).toHaveBeenCalledWith('SignInScreen')
	})
})
