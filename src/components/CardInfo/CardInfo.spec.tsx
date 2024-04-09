import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { CardInfo } from '.'
import { CardInfoProps } from './types'

describe('<CardInfo/>', () => {
	const props: CardInfoProps = {
		name: 'jest',
		balance: 2500.2,
	}

	it('should render', () => {
		customRender(<CardInfo {...props} />)

		expect(screen.getAllByRole('text')).toHaveLength(4)
		expect(screen.getByRole('text', { name: 'R$ 2.500,20' }))
	})
})
