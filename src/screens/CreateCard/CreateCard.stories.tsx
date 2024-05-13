import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { CreateCardScreen } from '.'

const meta: Meta<ComponentProps<typeof CreateCardScreen>> = {
	title: 'Screens/CreateCardScreen',
	component: CreateCardScreen,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof CreateCardScreen>>

export const Basic: Story = {
	args: {},
}
