import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { ProfileScreen } from '.'

const meta: Meta<ComponentProps<typeof ProfileScreen>> = {
	title: 'Screens/ProfileScreen',
	component: ProfileScreen,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof ProfileScreen>>

export const Basic: Story = {
	args: {},
}
