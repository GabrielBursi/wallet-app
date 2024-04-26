import { screen } from '@testing-library/react-native'
import { ImageSourcePropType } from 'react-native'
import { customRender } from '@/tests'

import { TransactionItem } from '.'
import { TransactionItemProps } from './types'

import SpotifyImg from '../../assets/img/spotify.png'

describe('<TransactionItem/>', () => {
	const props: TransactionItemProps = {
		title: 'jest',
		value: 22,
	}

	it('should render a default transaction item', () => {
		customRender(<TransactionItem {...props} />)

		expect(screen.getByRole('listitem', { name: /Jest/i })).toBeOnTheScreen()
		expect(screen.getByRole('text', { name: /Jest/i })).toBeOnTheScreen()
		expect(screen.getByRole('text', { name: 'R$ 22,00' })).toBeOnTheScreen()
	})

	it('should render with a description', () => {
		customRender(<TransactionItem {...props} description="jest and rtl" />)

		expect(
			screen.getByRole('text', { name: /Jest And Rtl/i })
		).toBeOnTheScreen()
		expect(screen.getAllByRole('text')).toHaveLength(3)
	})

	it('should render with an image', () => {
		customRender(
			<TransactionItem
				{...props}
				description="jest and rtl"
				image={SpotifyImg as ImageSourcePropType}
			/>
		)

		const image = screen.getByTestId('image-icon')

		expect(image).toBeOnTheScreen()
		expect(image.props.accessibilityRole).toEqual('image')
	})
})
