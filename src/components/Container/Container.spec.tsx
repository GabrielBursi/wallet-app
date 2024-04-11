import { screen } from '@testing-library/react-native'
import { customRender } from '../../tests'
import { Container } from '.'
import { Text } from 'react-native'

describe('<Container/>', () => {
	it('should render correctly', () => {
		customRender(
			<Container>
				<Text>Container</Text>
			</Container>
		)

		expect(screen.getByRole('text', { name: /container/i })).toBeOnTheScreen()
		expect(screen.getByTestId('container')).toHaveStyle({
			paddingLeft: 32,
			paddingRight: 32,
		})
	})
})
