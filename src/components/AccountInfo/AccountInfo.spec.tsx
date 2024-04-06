import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { AccountInfo } from '.'
import { AccountInfoProps } from './types'

describe('<AccountInfo/>', () => {
	const props: AccountInfoProps = {
		title: 'jest',
		text: 'testing a test',
	}

	it('should render correctly', () => {
		customRender(<AccountInfo {...props} />)

		expect(screen.getByRole('text', { name: /jest/i })).toBeOnTheScreen()
		expect(
			screen.getByRole('text', { name: /testing a test/i })
		).toBeOnTheScreen()
	})
})
