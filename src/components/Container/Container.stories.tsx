import { ComponentProps } from 'react'
import { Text } from 'react-native'
import type { Meta, StoryObj } from '@storybook/react'

import { TestProvider } from '@/providers'

import { Container } from '.'

import { Button } from '../Button'
import { NotificationCard } from '../NotificationCard'

const meta: Meta<ComponentProps<typeof Container>> = {
	title: 'Container',
	component: Container,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof Container>>

export const Basic: Story = {
	args: {},
	render: () => (
		<Container>
			<Text>Container</Text>
			<NotificationCard
				title="Container"
				date="Container"
				description="Storybook Container"
			/>
			<Button title="Container" fullWidth />
		</Container>
	),
}
