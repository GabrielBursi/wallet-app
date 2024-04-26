import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { LastTransactions } from '.'

import { mockTransactions } from '@/mock'
import { Container } from '@/components'

const meta: Meta<ComponentProps<typeof LastTransactions>> = {
	title: 'Components/LastTransactions',
	component: LastTransactions,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
	argTypes: {
		transactions: {
			type: 'symbol',
		},
	},
	args: {
		transactions: mockTransactions,
	},
	render: () => (
		<Container>
			<LastTransactions transactions={mockTransactions} />
		</Container>
	),
}
export default meta

type Story = StoryObj<ComponentProps<typeof LastTransactions>>

export const Basic: Story = {
	args: {},
}
