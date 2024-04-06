import { View } from 'react-native'
import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { NotificationCard } from '.'

const meta: Meta<ComponentProps<typeof NotificationCard>> = {
	title: 'Components/NotificationCard',
	component: NotificationCard,
	args: {
		date: '21 de Março 2024, 20:00',
		description: 'Comprou um café',
		title: 'Você gastou R$20,00 no The Kingdom',
		type: 'spent',
		isNew: true,
	},
	decorators: [
		(Story) => (
			<TestProvider>
				<View style={{ padding: 10 }}>
					<Story />
				</View>
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof NotificationCard>>

export const Basic: Story = {
	args: {},
}

export const Receive: Story = {
	args: {
		date: '21 de Março 2024, 20:00',
		description: 'Recebeu de Gabriel',
		title: 'Você recebeu R$250,00 de Gabriel Cavalaro Bursi',
		type: 'received',
		isNew: true,
	},
}

export const LongTitle: Story = {
	args: {
		date: '21 de Março 2024, 20:00',
		description: 'Curso de profissional de React de Native JStack',
		title: 'Você gastou R$2590,00 na Storybook React Testing Library Ltda.',
		type: 'spent',
		isNew: false,
	},
}
