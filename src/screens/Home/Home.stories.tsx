import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { HomeScreen } from '.'

const meta: Meta<ComponentProps<typeof HomeScreen>> = {
	title: 'Screens/HomeScreen',
	component: HomeScreen,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof HomeScreen>>

export const Basic: Story = {
	args: {},
}
