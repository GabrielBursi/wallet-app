import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { PaymentScreen } from '.'

describe('<PaymentScreen/>', () => {
	it('should render correctly', () => {
		customRender(<PaymentScreen />)

		expect(screen.getByRole('text', { name: /Payment/i })).toBeOnTheScreen()
	})
})
