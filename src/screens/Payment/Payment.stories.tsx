import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { PaymentScreen } from '.'

const meta: Meta<ComponentProps<typeof PaymentScreen>> = {
	title: 'Screens/PaymentScreen',
	component: PaymentScreen,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof PaymentScreen>>

export const Basic: Story = {
	args: {},
}
