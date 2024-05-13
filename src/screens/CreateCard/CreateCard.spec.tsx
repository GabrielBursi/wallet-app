import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { CreateCardScreen } from '.'

describe('<CreateCardScreen/>', () => {
	it('should render correctly', () => {
		customRender(<CreateCardScreen />)

		expect(
			screen.getByRole('heading', { name: /CreateCard/i })
		).toBeOnTheScreen()
	})
})
