import { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { Input } from '.'
import { KeyboardAvoidingView, View } from 'react-native'

const meta: Meta<ComponentProps<typeof Input>> = {
	title: 'Components/Input',
	component: Input,
	args: {
		placeholder: 'Digite aqui ...',
	},
	argTypes: {
		iconLeft: {
			type: 'symbol',
		},
		iconRight: {
			type: 'symbol',
		},
	},
	decorators: [
		(Story) => (
			<TestProvider>
				<View style={{ padding: 10 }}>
					<KeyboardAvoidingView behavior="height">
						<Story />
					</KeyboardAvoidingView>
				</View>
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof Input>>

export const Basic: Story = {
	args: {},
}

export const Email: Story = {
	name: 'Email Type',
	args: {
		placeholder: 'Digite seu email aqui',
		accessibilityLabel: 'email',
		autoCapitalize: 'none',
		autoCorrect: false,
		inputMode: 'email',
		keyboardType: 'email-address',
		iconLeft: {
			name: 'mail-outline',
		},
	},
}

export const Password: Story = {
	name: 'Password Type',
	args: {
		placeholder: 'Digite sua senha aqui',
		accessibilityLabel: 'senha',
		autoCapitalize: 'none',
		secureTextEntry: true,
		autoCorrect: false,
		autoComplete: 'off',
		iconLeft: {
			name: 'lock-closed-outline',
		},
		iconRight: {
			name: 'eye-outline',
			onPress: () => console.log('Hi Storybook!'),
		},
	},
}
