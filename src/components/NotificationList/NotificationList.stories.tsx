import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'
import { mockNotifications } from '@/tests/mocks/notifications'
import { Container } from '@/components'

import { NotificationList } from '.'

const meta: Meta<ComponentProps<typeof NotificationList>> = {
	title: 'Components/NotificationList',
	component: NotificationList,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
	args: {
		notifications: mockNotifications,
		onRefresh: () => console.log('Refresh Storybook!'),
		refreshing: false,
	},
	argTypes: {
		notifications: {
			type: 'symbol',
		},
		title: {
			type: 'string',
		},
		refreshing: {
			type: 'boolean',
		},
		onRefresh: {
			type: 'symbol',
		},
	},
	render: (args) => (
		<Container>
			<NotificationList {...args} />
		</Container>
	),
}
export default meta

type Story = StoryObj<ComponentProps<typeof NotificationList>>

export const New: Story = {
	args: {
		title: 'new',
		notifications: mockNotifications.filter(
			(notification) => notification.isNew
		),
	},
}

export const All: Story = {
	args: {
		title: 'all',
	},
}

export const Refreshing: Story = {
	args: {
		title: 'refresh',
		refreshing: true,
	},
}
