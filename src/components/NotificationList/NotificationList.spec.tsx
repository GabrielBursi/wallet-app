import { act, screen } from '@testing-library/react-native'

import { customRender } from '@/tests'
import { mockNotifications } from '@/tests/mocks'

import { NotificationList } from '.'

describe('<NotificationList/>', () => {
	const title = 'jest'
	const onRefreshMock = jest.fn()

	afterEach(() => jest.clearAllMocks())

	it('should render correctly', () => {
		customRender(
			<NotificationList title={title} notifications={mockNotifications} />
		)

		expect(screen.getByRole('list', { name: title })).toBeOnTheScreen()
		expect(screen.getAllByRole('text', { name: title })).toHaveLength(2)
		expect(
			screen.getByRole('listitem', { name: /Notification 1/i })
		).toBeOnTheScreen()
	})

	it('should render a empty list correctly', () => {
		customRender(<NotificationList title={title} notifications={[]} />)

		expect(screen.getByRole('text', { name: title })).toBeOnTheScreen()
		expect(screen.queryAllByRole('listitem')).toHaveLength(0)
		expect(
			screen.getByRole('text', { name: 'Você não possui notificações' })
		).toBeOnTheScreen()
	})

	it('should call the refresh function correctly', async () => {
		customRender(
			<NotificationList
				title={title}
				onRefresh={onRefreshMock}
				refreshing={true}
				notifications={mockNotifications}
			/>
		)

		const list = screen.getByRole('list', { name: title })
		const { refreshControl } = list.props
		await act(() => {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
			refreshControl.props.onRefresh()
		})

		expect(onRefreshMock).toHaveBeenCalled()
	})
})
