import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { TransferScreen } from '.'

describe('<TransferScreen/>', () => {
	it('should render correctly', () => {
		customRender(<TransferScreen />)

		expect(screen.getByRole('text', { name: /Transfer/i })).toBeOnTheScreen()
	})
})
