import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { Button } from '.'

const meta: Meta<ComponentProps<typeof Button>> = {
	title: 'Button',
	component: Button,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
	args: {
		title: 'storybook',
		onPress: () => console.log('Hi Storybook!'),
	},
	argTypes: {
		icon: {
			type: 'symbol',
		},
	},
}
export default meta

type Story = StoryObj<ComponentProps<typeof Button>>

export const Primary: Story = {
	args: {},
}

export const Ghost: Story = {
	args: {
		type: 'ghost',
	},
}

export const WithIcon: Story = {
	args: {
		icon: { name: 'book' },
	},
}

export const FullWidth: Story = {
	args: {
		fullWidth: true,
	},
}
