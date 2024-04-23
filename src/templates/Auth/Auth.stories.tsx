import { KeyboardAvoidingView } from 'react-native'
import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { TestProvider } from '@/providers'
import { Input } from '@/components'

import { Auth } from '.'

const meta: Meta<ComponentProps<typeof Auth>> = {
	title: 'Templates/Auth',
	component: Auth,
	args: {
		titleScreen: 'Bem vindo(a) de volta ao Storybook do Wallet App',
		onPressButton: () => console.log('Hi Storybook!'),
		redirectTo: 'SignInScreen',
		spanRedirect: 'Tem Storybook?',
		textRedirect: 'Login',
		titleButton: 'Storybook',
		onSignInSocialButton: () => console.log('Hi Storybook!'),
	},
	decorators: [
		(Story) => (
			<TestProvider>
				<KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
					<Story />
				</KeyboardAvoidingView>
			</TestProvider>
		),
	],
	render: (args) => (
		<Auth {...args}>
			<Input
				iconLeft={{ name: 'book-outline' }}
				autoFocus
				placeholder="Primeiro campo"
			/>
			<Input placeholder="Segundo campo" />
			<Input placeholder="Terceiro campo" />
		</Auth>
	),
}
export default meta

type Story = StoryObj<ComponentProps<typeof Auth>>

export const Basic: Story = {
	args: {},
}
