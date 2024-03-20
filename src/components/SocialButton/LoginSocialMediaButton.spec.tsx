import { screen } from '@testing-library/react-native'

import { customRender } from '@/tests'

import { SocialButton } from '.'
import { SocialButtonProps } from './types'

const buttonProps: SocialButtonProps = {
	title: 'teste',
	icon: { name: 'google' },
}

describe('<SocialButton/>', () => {
	it('should render the button correctly', () => {
		customRender(<SocialButton {...buttonProps} />)

		expect(screen.getByRole('button', { name: /Teste/i })).toBeOnTheScreen()
		expect(screen.getByRole('img', { name: /google/i })).toBeOnTheScreen()
	})

	it('should render the button with custom color correctly', () => {
		customRender(<SocialButton {...buttonProps} color="blue" />)

		expect(screen.getByRole('button', { name: /Teste/i })).toHaveStyle({
			backgroundColor: '#4368c7',
		})
	})
})
