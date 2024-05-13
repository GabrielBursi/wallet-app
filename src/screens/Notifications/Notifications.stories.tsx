import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { NotificationsScreen } from '.'

const meta: Meta<ComponentProps<typeof NotificationsScreen>> = {
	title: 'Screens/NotificationsScreen',
	component: NotificationsScreen,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof NotificationsScreen>>

export const Basic: Story = {
	args: {},
}
