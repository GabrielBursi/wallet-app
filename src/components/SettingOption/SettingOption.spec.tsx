import { screen, userEvent } from '@testing-library/react-native'
import { customRender } from '../../tests'

import { SettingOptionProps } from './types'

import { SettingOption } from '.'

const props: SettingOptionProps = {
	title: 'jest',
}

describe('<SettingOption/>', () => {
	const onPressMock = jest.fn()

	afterEach(() => jest.clearAllMocks())

	it('should render a default option', () => {
		customRender(<SettingOption {...props} />)

		expect(screen.getByRole('text', { name: props.title })).toBeOnTheScreen()
		expect(
			screen.getByAccessibilityHint('acessar opção de configuração')
		).toBeOnTheScreen()
	})

	it('should render a option with icon', () => {
		customRender(<SettingOption {...props} icon={{ name: 'user' }} />)

		expect(screen.getByRole('img', { name: 'user' })).toBeOnTheScreen()
	})

	it('should call the onPress correctly', async () => {
		customRender(
			<SettingOption {...props} icon={{ name: 'user' }} onPress={onPressMock} />
		)

		await userEvent.press(screen.getByRole('text', { name: props.title }))
		expect(onPressMock).toHaveBeenCalled()
	})
})
