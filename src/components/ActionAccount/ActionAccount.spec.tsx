import { screen } from '@testing-library/react-native'
import { customRender } from '../../tests'

import { ActionAccountProps } from './types'

import { ActionAccount } from '.'

const props: ActionAccountProps = {
	title: 'jest',
	icon: { name: 'book' },
}

describe('<ActionAccount/>', () => {
	it('should render correctly', () => {
		customRender(<ActionAccount {...props} />)

		expect(screen.getByAccessibilityHint('ir para jest')).toBeOnTheScreen()
		expect(screen.getByRole('text', { name: /jest/i })).toBeOnTheScreen()
		expect(screen.getByRole('image', { name: /book/i })).toBeOnTheScreen()
	})
})
