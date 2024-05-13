import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { DashboardScreen } from '.'

const meta: Meta<ComponentProps<typeof DashboardScreen>> = {
	title: 'Screens/DashboardScreen',
	component: DashboardScreen,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof DashboardScreen>>

export const Basic: Story = {
	args: {},
}
