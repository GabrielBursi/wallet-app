import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { SettingsScreen } from '.'

describe('<SettingsScreen/>', () => {
	it('should render correctly', () => {
		customRender(<SettingsScreen />)

		expect(
			screen.getByRole('text', { name: /configurações/i })
		).toBeOnTheScreen()
		expect(screen.getByRole('button', { name: /sair/i })).toBeOnTheScreen()
		expect(screen.getAllByRole('menuitem')).toHaveLength(5)
	})
})
