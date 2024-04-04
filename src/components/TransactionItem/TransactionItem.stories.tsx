import { ComponentProps } from 'react'
import { ImageSourcePropType } from 'react-native'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import NetflixImg from '../../assets/img/netflix.png'
import SpotifyImg from '../../assets/img/spotify.png'
import PrimeImg from '../../assets/img/prime.png'

import { TransactionItem } from '.'

const meta: Meta<ComponentProps<typeof TransactionItem>> = {
	title: 'TransactionItem',
	component: TransactionItem,
	args: {
		title: 'netflix',
		description: 'assinatura mensal',
		value: 29,
		image: NetflixImg as ImageSourcePropType,
	},
	argTypes: {
		image: {
			type: 'symbol',
		},
	},
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<ComponentProps<typeof TransactionItem>>

export const Basic: Story = {
	args: {},
}

export const Spotify: Story = {
	args: {
		title: 'spotify',
		value: 20,
		image: SpotifyImg as ImageSourcePropType,
	},
}

export const Prime: Story = {
	args: {
		title: 'prime video',
		description: '',
		value: 24,
		image: PrimeImg as ImageSourcePropType,
	},
}

export const WithoutIcon: Story = {
	args: {
		title: 'without icon',
		description: '',
		value: 100.5,
		image: undefined,
	},
}
