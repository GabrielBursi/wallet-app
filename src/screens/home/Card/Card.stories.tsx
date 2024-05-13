import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { CardScreen } from '.'

const meta: Meta<ComponentProps<typeof CardScreen>> = {
	title: 'Screens/CardScreen',
	component: CardScreen,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof CardScreen>>

export const Basic: Story = {
	args: {},
}
