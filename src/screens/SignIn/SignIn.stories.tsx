import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { SignInScreen } from '.'

const meta: Meta<ComponentProps<typeof SignInScreen>> = {
	title: 'Screens/SignInScreen',
	component: SignInScreen,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof SignInScreen>>

export const Basic: Story = {
	args: {},
}
