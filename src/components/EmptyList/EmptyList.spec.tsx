import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { EmptyList } from '.'

describe('<EmptyList/>', () => {
	it('should render correctly', () => {
		customRender(<EmptyList title="without tests" />)

		expect(
			screen.getByRole('img', { name: /without tests/i })
		).toBeOnTheScreen()
		expect(
			screen.getByRole('text', { name: /without tests/i })
		).toBeOnTheScreen()
	})
})
