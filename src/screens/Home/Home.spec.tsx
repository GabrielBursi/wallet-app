import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { HomeScreen } from '.'

describe('<HomeScreen/>', () => {
	it('should render correctly', () => {
		customRender(<HomeScreen />)

		expect(screen.getByRole('text', { name: /Home/i })).toBeOnTheScreen()
	})
})
