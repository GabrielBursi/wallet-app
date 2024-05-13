import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { DashboardScreen } from '.'

describe('<DashboardScreen/>', () => {
	it('should render correctly', () => {
		customRender(<DashboardScreen />)

		expect(
			screen.getByRole('heading', { name: /Dashboard/i })
		).toBeOnTheScreen()
	})
})
