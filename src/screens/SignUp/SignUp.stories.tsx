import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { SignUpScreen } from '.'

const meta: Meta<ComponentProps<typeof SignUpScreen>> = {
	title: 'Screens/SignUpScreen',
	component: SignUpScreen,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof SignUpScreen>>

export const Basic: Story = {
	args: {},
}
