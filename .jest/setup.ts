import '@testing-library/react-native/extend-expect'
import '@testing-library/jest-native/extend-expect'
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'
import { userEvent } from '@testing-library/react-native'

import { serverApiTest } from '@/tests'
import { mockNavigation } from '@/tests/mocks'

jest.mock('react-native-reanimated', () => {
	const Reanimated = require('react-native-reanimated/mock')
	Reanimated.default.call = () => {}

	return Reanimated
})

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext)

jest.mock('@react-navigation/native', () => ({
	...(jest.requireActual('@react-navigation/native')),
	useNavigation: () => ({
		...mockNavigation
	}),
}))

beforeAll(() => {
	serverApiTest.listen({ onUnhandledRequest: 'error' })
	userEvent.setup()
})
afterAll(() => serverApiTest.close())
afterEach(() => serverApiTest.resetHandlers())
