import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { TabBarIcon } from '.'

const meta: Meta<ComponentProps<typeof TabBarIcon>> = {
	title: 'Components/TabBarIcon',
	component: TabBarIcon,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
	args: {
		accessibilityHint: 'ir para storybook',
		accessibilityLabel: 'storybook',
		focused: true,
		size: 25,
		icon: 'wallet',
		iconFocused: 'wallet-outline',
	},
}
export default meta

type Story = StoryObj<ComponentProps<typeof TabBarIcon>>

export const Basic: Story = {
	args: {
		focused: false,
	},
}

export const Focus: Story = {
	args: {},
}
