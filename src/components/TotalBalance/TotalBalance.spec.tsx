import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { TotalBalance } from '.'

describe('<TotalBalance/>', () => {
	it('should render correctly', () => {
		customRender(<TotalBalance balance={4000} />)

		expect(screen.getAllByRole('text')).toHaveLength(2)
		expect(screen.getByRole('text', { name: 'R$ 4.000,00' })).toBeOnTheScreen()
	})
})
