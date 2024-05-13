import { screen, userEvent } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { mockNavigation } from '@/tests/mocks'
import { SignInScreen } from '.'

describe('<SignInScreen/>', () => {
	it('should render correctly', () => {
		customRender(<SignInScreen />)

		expect(screen.getByLabelText(/email/i)).toBeOnTheScreen()
		expect(screen.getByLabelText(/senha/i)).toBeOnTheScreen()
		expect(screen.getByRole('link', { name: /criar conta/i })).toBeOnTheScreen()
	})

	it.skip('should signIn with social media correctly', () => {
		customRender(<SignInScreen />)

		expect(true).toBe(false)
	})

	it.skip('should signIn correctly', () => {
		customRender(<SignInScreen />)

		expect(true).toBe(false)
	})

	it('should navigate to signUp screen  correctly', async () => {
		customRender(<SignInScreen />)

		const buttonRedirect = screen.getByHintText(`ir para a página SignUpScreen`)
		await userEvent.press(buttonRedirect)
		expect(mockNavigation.navigate).toHaveBeenCalledWith('SignUpScreen')
	})
})
