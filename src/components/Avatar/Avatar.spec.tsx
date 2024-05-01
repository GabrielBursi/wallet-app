/* eslint-disable @typescript-eslint/no-floating-promises */
import { act, screen, userEvent, waitFor } from '@testing-library/react-native'
import { HttpResponse, http } from 'msw'

import { customRender, serverApiTest } from '@/tests'
import { mockNavigation } from '@/tests/mocks'
import { UserServices } from '@/api/services'

import DefaultUser from '../../assets/img/default-user.png'
import { Avatar } from '.'

describe('<Avatar/>', () => {
	const userName = 'GabrielBursi'
	const spyGetUser = jest.spyOn(UserServices, 'GetUser')

	it('should render correctly', async () => {
		await act(async () => {
			await waitFor(() => customRender(<Avatar username={userName} />))
		})

		expect(screen.getByRole('button', { name: userName })).toBeOnTheScreen()
		expect(screen.getByRole('image', { name: userName })).toBeOnTheScreen()
	})

	it('should render a normal size avatar correctly', async () => {
		await act(async () => {
			await waitFor(() => customRender(<Avatar username={userName} />))
		})

		const image = screen.getByRole('image', { name: userName })
		expect(image).toHaveProp('width', 75)
		expect(image).toHaveProp('height', 75)
	})

	it('should render a small size avatar correctly', async () => {
		await act(async () => {
			await waitFor(() =>
				customRender(<Avatar username={userName} size="small" />)
			)
		})

		const image = screen.getByRole('image', { name: userName })
		expect(image).toHaveProp('width', 45)
		expect(image).toHaveProp('height', 45)
	})

	it('should navigate to the profile screen', async () => {
		await act(async () => {
			await waitFor(() => customRender(<Avatar username={userName} />))
		})

		const image = screen.getByRole('image', { name: userName })
		await userEvent.press(image)
		expect(mockNavigation.navigate).toHaveBeenCalledWith('teste')
	})

	it('should get the user data and set the src image correctly', async () => {
		await act(async () => {
			await waitFor(() => customRender(<Avatar username={userName} />))
		})

		const image = screen.getByRole('image', { name: userName })

		expect(spyGetUser).toHaveBeenCalledWith(userName)
		expect(image).toHaveProp('source', { uri: 'teste' })
	})

	it('should render the default image when the API returns error correctly', async () => {
		serverApiTest.use(
			...[
				http.get(`https://api.github.com/users/:username`, () =>
					HttpResponse.error()
				),
			]
		)

		await act(async () => {
			await waitFor(() => customRender(<Avatar username={userName} />))
		})

		const image = screen.getByRole('image', { name: userName })

		expect(spyGetUser).toHaveBeenCalled()
		expect(image).toHaveProp('source', { uri: undefined })
		expect(image).toHaveProp('defaultSource', DefaultUser)
	})
})
