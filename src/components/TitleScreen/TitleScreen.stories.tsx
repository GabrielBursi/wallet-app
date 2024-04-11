import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { TitleScreen } from '.'
import { View } from 'react-native'

const meta: Meta<ComponentProps<typeof TitleScreen>> = {
	title: 'Components/TitleScreen',
	component: TitleScreen,
	args: {
		title: 'storybook',
	},
	decorators: [
		(Story) => (
			<TestProvider>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Story />
				</View>
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof TitleScreen>>

export const Basic: Story = {
	args: {},
}
