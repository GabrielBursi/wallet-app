import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { TabBarLabel } from '.'

describe('<TabBarLabel/>', () => {
	it('should render correctly', () => {
		customRender(<TabBarLabel label="jest" />)

		expect(screen.getByRole('text', { name: /jest/i })).toBeOnTheScreen()
	})
})
