import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { AccountInfo } from '.'
import { View } from 'react-native'

const meta: Meta<ComponentProps<typeof AccountInfo>> = {
	title: 'Components/AccountInfo',
	component: AccountInfo,
	args: {
		text: 'storybook jest',
		title: 'name',
	},
	decorators: [
		(Story) => (
			<TestProvider>
				<View style={{ padding: 6, width: 300 }}>
					<Story />
				</View>
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof AccountInfo>>

export const Basic: Story = {
	args: {},
}

export const BigText: Story = {
	args: {
		text: 'very long text value wow it is very long',
		title: 'very very long long title ',
	},
}
