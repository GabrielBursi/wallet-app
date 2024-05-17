import { FlashListProps } from '@shopify/flash-list'
import { Transaction } from '@/types/app'

/* eslint-disable @typescript-eslint/ban-types */
export type TransactionListProps = {
	transactions: Transaction[]
} & RefreshProps

type RefreshProps = Pick<
	FlashListProps<TransactionListProps[]>,
	'onRefresh' | 'refreshing'
>
