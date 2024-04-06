import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { ActionAccount } from '.'

const meta: Meta<ComponentProps<typeof ActionAccount>> = {
	title: 'Components/ActionAccount',
	component: ActionAccount,
	args: {
		icon: { name: 'add-outline' },
		title: 'storybook',
	},
	argTypes: {
		icon: {
			type: 'symbol',
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

type Story = StoryObj<ComponentProps<typeof ActionAccount>>

export const Basic: Story = {
	args: {},
}
