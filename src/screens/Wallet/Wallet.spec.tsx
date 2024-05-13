import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { WalletScreen } from '.'

describe('<WalletScreen/>', () => {
	it('should render correctly', () => {
		customRender(<WalletScreen />)

		expect(screen.getByRole('heading', { name: /Wallet/i })).toBeOnTheScreen()
	})
})
