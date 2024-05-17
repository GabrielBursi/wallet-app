import { act, screen } from '@testing-library/react-native'
import { customRender } from '@/tests'
import { TransactionList } from '.'
import { mockTransactions } from '@/tests/mocks'

describe('<TransactionList/>', () => {
	const onRefreshMock = jest.fn()
	afterEach(() => jest.clearAllMocks())

	it('should render correctly', () => {
		customRender(<TransactionList transactions={mockTransactions} />)

		expect(screen.getByRole('list', { name: /transações/i })).toBeOnTheScreen()
		expect(
			screen.getByRole('listitem', { name: /compra no mercado/i })
		).toBeOnTheScreen()
	})

	it('should render a empty list correctly', () => {
		customRender(<TransactionList transactions={[]} />)

		expect(screen.queryAllByRole('listitem')).toHaveLength(0)
		expect(
			screen.getByRole('text', { name: 'Você não possui transações' })
		).toBeOnTheScreen()
	})

	it('should call the refresh function correctly', async () => {
		customRender(
			<TransactionList
				transactions={[]}
				onRefresh={onRefreshMock}
				refreshing={true}
			/>
		)

		const list = screen.getByRole('list', { name: /transações/i })
		const { refreshControl } = list.props
		await act(() => {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
			refreshControl.props.onRefresh()
		})

		expect(onRefreshMock).toHaveBeenCalled()
	})
})
