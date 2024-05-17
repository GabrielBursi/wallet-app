import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { TitleTransactionsList } from '.'
import { Container } from '../Container'

const meta: Meta<ComponentProps<typeof TitleTransactionsList>> = {
	title: 'Components/TitleTransactionsList',
	component: TitleTransactionsList,
	decorators: [
		(Story) => (
			<TestProvider>
				<Container>
					<Story />
				</Container>
			</TestProvider>
		),
	],
	args: {
		onToggle: () => console.log('Toogle'),
		type: 'all',
	},
	argTypes: {
		onToggle: {
			type: 'boolean',
		},
	},
}
export default meta

type Story = StoryObj<ComponentProps<typeof TitleTransactionsList>>

export const All: Story = {
	args: {},
}

export const Last: Story = {
	args: {
		type: 'last',
	},
}
