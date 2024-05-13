import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { SettingsScreen } from '.'

const meta: Meta<ComponentProps<typeof SettingsScreen>> = {
	title: 'Screens/SettingsScreen',
	component: SettingsScreen,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof SettingsScreen>>

export const Basic: Story = {
	args: {},
}
