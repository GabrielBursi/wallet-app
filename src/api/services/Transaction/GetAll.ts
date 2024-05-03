import { MyAPI } from '@/api/config'
import { Transaction } from '@/types/app'

export const GetAll = async (): Promise<Transaction[] | Error> => {
	try {
		const { data } = await MyAPI<Transaction[]>(`/transaction`)
		return data
	} catch (error) {
		return new Error(`Houve um erro ao buscar as transações.`)
	}
}
