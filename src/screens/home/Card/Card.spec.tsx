import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { CardScreen } from '.'

describe('<CardScreen/>', () => {
	it('should render correctly', () => {
		customRender(<CardScreen />)

		expect(screen.getByRole('text', { name: /Card/i })).toBeOnTheScreen()
	})
})