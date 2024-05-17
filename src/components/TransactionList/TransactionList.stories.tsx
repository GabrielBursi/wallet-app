import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'
import { mockTransactions } from '@/tests/mocks/transactions'

import { Container } from '../Container'
import { TransactionList } from '.'

const meta: Meta<ComponentProps<typeof TransactionList>> = {
	title: 'Components/TransactionList',
	component: TransactionList,
	decorators: [
		(Story) => (
			<TestProvider>
				<Container>
					<Story />
				</Container>
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
}
export default meta

type Story = StoryObj<ComponentProps<typeof TransactionList>>

export const Basic: Story = {
	args: {},
}

export const Empty: Story = {
	args: {
		transactions: [],
	},
}
