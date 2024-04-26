import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { Menu } from '.'
import { Container } from '@/components'

const meta: Meta<ComponentProps<typeof Menu>> = {
	title: 'Components/Menu',
	component: Menu,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
	render: () => (
		<Container>
			<Menu />
		</Container>
	),
}
export default meta

type Story = StoryObj<ComponentProps<typeof Menu>>

export const Basic: Story = {
	args: {},
}
