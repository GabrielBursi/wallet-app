import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { ProfileScreen } from '.'

describe('<ProfileScreen/>', () => {
	it('should render correctly', () => {
		customRender(<ProfileScreen />)

		expect(screen.getByRole('text', { name: /Profile/i })).toBeOnTheScreen()
	})
})
