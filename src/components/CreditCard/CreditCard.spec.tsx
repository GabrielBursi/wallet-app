import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { CreditCard } from '.'
import { CreditCardProps } from './types'

describe('<CreditCard/>', () => {
	const props: CreditCardProps = {
		date: '01/30',
		name: 'jest react testing library',
		number: 1234432112344321,
	}

	it('should render correctly', () => {
		customRender(<CreditCard {...props} />)

		expect(
			screen.getByRole('text', { name: /jest react testing library/i })
		).toBeOnTheScreen()
		expect(screen.getByRole('text', { name: '01/30' })).toBeOnTheScreen()
		expect(screen.getAllByRole('text', { name: '1234' })).toHaveLength(2)
		expect(screen.getAllByRole('text', { name: '4321' })).toHaveLength(2)
		expect(screen.getAllByTestId('image-card')).toHaveLength(2)
	})
})
