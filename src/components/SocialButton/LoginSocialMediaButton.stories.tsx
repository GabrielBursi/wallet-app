import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SocialButton } from '.'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles'

const meta: Meta<ComponentProps<typeof SocialButton>> = {
	title: 'SocialButton',
	component: SocialButton,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
	args: {
		onPress: () => console.log('Hi Storybook!'),
	},
	argTypes: {
		icon: {
			type: 'symbol',
		},
		onPress: {
			type: 'symbol',
		},
	},
}
export default meta

type Story = StoryObj<ComponentProps<typeof SocialButton>>

export const Google: Story = {
	args: {
		title: 'google',
		icon: {
			name: 'google',
		},
	},
}

export const Facebook: Story = {
	args: {
		title: 'facebook',
		color: 'blue',
		icon: {
			name: 'facebook',
			color: theme.colors.white,
		},
	},
}
