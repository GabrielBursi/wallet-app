import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { WalletScreen } from '.'

const meta: Meta<ComponentProps<typeof WalletScreen>> = {
	title: 'Screens/WalletScreen',
	component: WalletScreen,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof WalletScreen>>

export const Basic: Story = {
	args: {},
}
