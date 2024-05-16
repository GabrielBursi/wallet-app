import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { TabBarIcon } from '.'
import { TabBarIconProps } from './types'

describe('<TabBarIcon/>', () => {
	const props: TabBarIconProps = {
		focused: false,
		icon: 'book-outline',
		iconFocused: 'book',
		size: 25,
		accessibilityHint: 'do a test',
		accessibilityLabel: 'jest',
	}

	it('should render a not focus icon correctly', () => {
		customRender(<TabBarIcon {...props} />)

		const icon = screen.getByRole('image', { name: props.accessibilityLabel })

		expect(screen.getByTestId(props.icon)).toBeOnTheScreen()
		expect(screen.queryByTestId(props.iconFocused)).not.toBeOnTheScreen()
		expect(icon).toHaveAccessibilityState({
			busy: undefined,
			checked: undefined,
			disabled: undefined,
			expanded: undefined,
			selected: false,
		})
	})

	it('should render a focus icon correctly', () => {
		customRender(<TabBarIcon {...props} focused />)

		const icon = screen.getByRole('image', { name: props.accessibilityLabel })

		expect(screen.getByTestId(props.iconFocused)).toBeOnTheScreen()
		expect(screen.queryByTestId(props.icon)).not.toBeOnTheScreen()
		expect(icon).toHaveAccessibilityState({
			busy: undefined,
			checked: undefined,
			disabled: undefined,
			expanded: undefined,
			selected: true,
		})
	})
})
