import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { TotalBalance } from '.'

const meta: Meta<ComponentProps<typeof TotalBalance>> = {
	title: 'Components/TotalBalance',
	component: TotalBalance,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
	args: {
		balance: 1500,
	},
	argTypes: {
		balance: {
			type: 'number',
		},
	},
}
export default meta

type Story = StoryObj<ComponentProps<typeof TotalBalance>>

export const Basic: Story = {
	args: {},
}
