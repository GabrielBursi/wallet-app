import { Transaction } from '@/types/app'
import NetflixImg from '../assets/img/netflix.png'
import { ImageSourcePropType } from 'react-native'

export const mockTransactions: Transaction[] = [
	{
		title: 'Compra no Mercado',
		description: 'Compras mensais de supermercado',
		value: -150.75,
		date: new Date('2024-03-11T22:34:18.751Z'),
		image: NetflixImg as ImageSourcePropType,
	},
	{
		title: 'Transferência de João',
		description: 'Pagamento da dívida do jantar',
		value: -50,
		date: new Date('2024-01-04T22:32:55.721Z'),
		image: NetflixImg as ImageSourcePropType,
	},
	{
		title: 'Salário Recebido',
		description: 'Pagamento mensal da empresa',
		value: 2500,
		date: new Date('2024-03-13T14:36:39.389Z'),
		image: NetflixImg as ImageSourcePropType,
	},
	{
		title: 'Restaurante',
		description: 'Jantar com amigos',
		value: -80,
		date: new Date('2024-03-21T23:49:30.064Z'),
		image: NetflixImg as ImageSourcePropType,
	},
	{
		title: 'Depósito Bancário',
		description: 'Depósito de economias',
		value: 1000,
		date: new Date('2024-04-06T18:54:43.346Z'),
		image: NetflixImg as ImageSourcePropType,
	},
	{
		title: 'Uber',
		description: 'Viagem para o trabalho',
		value: -30,
		date: new Date('2024-02-01T21:35:43.432Z'),
		image: NetflixImg as ImageSourcePropType,
	},
	{
		title: 'Netflix',
		description: 'Assinatura mensal',
		value: -15.99,
		date: new Date('2024-03-22T16:00:25.060Z'),
		image: NetflixImg as ImageSourcePropType,
	},
	{
		title: 'Transferência de Maria',
		description: 'Pagamento do aluguel',
		value: -800,
		date: new Date('2024-01-30T20:50:04.983Z'),
		image: NetflixImg as ImageSourcePropType,
	},
	{
		title: 'Economias',
		description: 'Transferência para conta poupança',
		value: -300,
		date: new Date('2024-04-18T10:12:29.150Z'),
		image: NetflixImg as ImageSourcePropType,
	},
	{
		title: 'Amazon',
		description: 'Compra online',
		value: -120.5,
		date: new Date('2024-03-18T13:13:04.636Z'),
		image: NetflixImg as ImageSourcePropType,
	},
	{
		title: 'Transferência de Pedro',
		description: 'Reembolso de empréstimo',
		value: 200,
		date: new Date('2024-03-19T04:23:49.578Z'),
		image: NetflixImg as ImageSourcePropType,
	},
	{
		title: 'Café da Manhã',
		description: 'Café na padaria',
		value: -5,
		date: new Date('2024-01-22T09:15:35.688Z'),
		image: NetflixImg as ImageSourcePropType,
	},
	{
		title: 'Gás de Cozinha',
		description: 'Recarga de gás',
		value: -50,
		date: new Date('2024-01-31T02:02:34.825Z'),
		image: NetflixImg as ImageSourcePropType,
	},
	{
		title: 'Presente para Amigo',
		description: 'Aniversário do amigo',
		value: -25,
		date: new Date('2024-04-24T17:47:33.749Z'),
		image: NetflixImg as ImageSourcePropType,
	},
	{
		title: 'Transferência de Sandra',
		description: 'Pagamento do empréstimo',
		value: -300,
		date: new Date('2024-04-07T12:26:02.512Z'),
		image: NetflixImg as ImageSourcePropType,
	},
]