import { act, screen, waitFor } from '@testing-library/react-native'

import { customRender } from '@/tests'
import { NotificationServices } from '@/api/services'

import { NotificationsScreen } from '.'

describe('<NotificationsScreen/>', () => {
	const spyGetNotifications = jest.spyOn(NotificationServices, 'GetAll')

	afterEach(() => jest.clearAllMocks())

	it('should render correctly', async () => {
		await act(async () => {
			await waitFor(() => customRender(<NotificationsScreen />))
		})

		await waitFor(() => {
			expect(
				screen.getByRole('text', { name: 'Notificações' })
			).toBeOnTheScreen()
			expect(screen.getByRole('list', { name: /novas/i })).toBeOnTheScreen()
			expect(screen.getByRole('list', { name: /todas/i })).toBeOnTheScreen()
		})
	})

	it('should show the notifications correctly', async () => {
		await act(async () => {
			await waitFor(() => customRender(<NotificationsScreen />))
		})

		await waitFor(() => {
			expect(spyGetNotifications).toHaveBeenCalled()
			expect(
				screen.getAllByRole('listitem', { name: /notification 1/i })
			).toHaveLength(2)
			expect(
				screen.getAllByRole('listitem', { name: /notification 3/i })
			).toHaveLength(2)
		})
	})

	it('should refresh the list correctly', async () => {
		await act(async () => {
			await waitFor(() => customRender(<NotificationsScreen />))
		})

		const list = screen.getByRole('list', { name: /todas/i })
		const { refreshControl } = list.props
		await act(() => {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
			refreshControl.props.onRefresh()
		})

		await waitFor(() => {
			expect(spyGetNotifications).toHaveBeenCalledTimes(3)
		})
	})
})
