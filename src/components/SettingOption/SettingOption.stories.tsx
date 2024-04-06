import { ComponentProps } from 'react'
import { View } from 'react-native'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { SettingOption } from '.'

const meta: Meta<ComponentProps<typeof SettingOption>> = {
	title: 'Components/SettingOption',
	component: SettingOption,
	args: {
		icon: { name: 'person-outline' },
		title: 'profile',
		onPress: () => console.log('Hi Storybook!'),
	},
	argTypes: {
		icon: {
			type: 'symbol',
		},
	},
	decorators: [
		(Story) => (
			<TestProvider>
				<View style={{ margin: 10, backgroundColor: '#f3f3f3' }}>
					<Story />
				</View>
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof SettingOption>>

export const Basic: Story = {
	args: {},
}

export const WithoutIcon: Story = {
	args: {
		icon: undefined,
	},
}
