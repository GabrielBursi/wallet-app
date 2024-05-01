import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { Avatar } from '.'

const meta: Meta<ComponentProps<typeof Avatar>> = {
	title: 'Components/Avatar',
	component: Avatar,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
	args: {
		username: 'GabrielBursi',
	},
}
export default meta

type Story = StoryObj<ComponentProps<typeof Avatar>>

export const Normal: Story = {
	args: {
		size: 'normal',
	},
}

export const Small: Story = {
	args: {
		size: 'small',
	},
}
