import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { CardInfo } from '.'
import { Container } from '../Container'

const meta: Meta<ComponentProps<typeof CardInfo>> = {
	title: 'Components/CardInfo',
	component: CardInfo,
	args: {
		balance: 1200340.5,
		name: 'nobank',
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

type Story = StoryObj<ComponentProps<typeof CardInfo>>

export const Basic: Story = {
	args: {},
}
