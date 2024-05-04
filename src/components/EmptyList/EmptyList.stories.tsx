import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { EmptyList } from '.'

const meta: Meta<ComponentProps<typeof EmptyList>> = {
	title: 'Components/EmptyList',
	component: EmptyList,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
	args: {
		title: 'não existe stories',
	},
	argTypes: {
		title: {
			type: 'string',
		},
	},
}
export default meta

type Story = StoryObj<ComponentProps<typeof EmptyList>>

export const Basic: Story = {
	args: {},
}
