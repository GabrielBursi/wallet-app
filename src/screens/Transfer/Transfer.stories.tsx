import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { TransferScreen } from '.'

const meta: Meta<ComponentProps<typeof TransferScreen>> = {
	title: 'Screens/TransferScreen',
	component: TransferScreen,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof TransferScreen>>

export const Basic: Story = {
	args: {},
}
