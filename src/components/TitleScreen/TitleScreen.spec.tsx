import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { TitleScreen } from '.'

describe('<TitleScreen/>', () => {
	it('should render correctly', () => {
		customRender(<TitleScreen title="jest" />)

		expect(screen.getByRole('text', { name: /jest/i })).toBeOnTheScreen()
	})
})
