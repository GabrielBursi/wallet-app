import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { CreditCard } from '.'
import { Container } from '../Container'

const meta: Meta<ComponentProps<typeof CreditCard>> = {
	title: 'Components/CreditCard',
	component: CreditCard,
	args: {
		date: '01/28',
		name: 'storybook jest RTL',
		number: 1234123412341234,
	},
	decorators: [
		(Story) => (
			<TestProvider>
				<Container>
					<Story />
				</Container>
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof CreditCard>>

export const Basic: Story = {
	args: {},
}
