import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { ActionWallet } from '.'

const meta: Meta<ComponentProps<typeof ActionWallet>> = {
	title: 'ActionWallet',
	component: ActionWallet,
	args: {
		title: 'payout',
		icon: { name: 'add-circle-outline' },
		onPress: () => console.log('Hi Storybook!'),
	},
	argTypes: {
		icon: {
			type: 'string',
		},
	},
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof ActionWallet>>

export const Basic: Story = {
	args: {},
}
