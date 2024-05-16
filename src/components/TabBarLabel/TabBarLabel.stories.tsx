import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { TabBarLabel } from '.'

const meta: Meta<ComponentProps<typeof TabBarLabel>> = {
	title: 'Components/TabBarLabel',
	component: TabBarLabel,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof TabBarLabel>>

export const Basic: Story = {
	args: {
		label: 'storybook',
	},
}
