import { screen, userEvent } from '@testing-library/react-native'
import { customRender } from '../../tests'

import { SettingOptionProps } from './types'

import { SettingOption } from '.'

describe('<SettingOption/>', () => {
	const onPressMock = jest.fn()

	const props: SettingOptionProps = {
		title: 'jest',
		onPress: onPressMock,
	}

	afterEach(() => jest.clearAllMocks())

	it('should render a default option', () => {
		customRender(<SettingOption {...props} />)

		expect(screen.getByRole('text', { name: props.title })).toBeOnTheScreen()
		expect(
			screen.getByAccessibilityHint('acessar opção de configuração')
		).toBeOnTheScreen()
	})

	it('should render a option with icon', () => {
		customRender(<SettingOption {...props} icon={{ name: 'person-outline' }} />)

		expect(
			screen.getByRole('img', { name: 'person-outline' })
		).toBeOnTheScreen()
	})

	it('should call the onPress correctly', async () => {
		customRender(
			<SettingOption
				{...props}
				icon={{ name: 'person-outline' }}
				onPress={onPressMock}
			/>
		)

		await userEvent.press(screen.getByRole('text', { name: props.title }))
		expect(onPressMock).toHaveBeenCalled()
	})
})
