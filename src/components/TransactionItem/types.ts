import { Transaction } from '@/types/app'

/* eslint-disable @typescript-eslint/ban-types */
export type TransactionItemProps = Omit<Transaction, 'date'>
