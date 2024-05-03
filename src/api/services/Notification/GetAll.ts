import { MyAPI } from '@/api/config'
import { Notification } from '@/types/app'

export const GetAll = async (): Promise<Notification[] | Error> => {
	try {
		const { data } = await MyAPI<Notification[]>(`/notification`)
		return data
	} catch (error) {
		return new Error(`Houve um erro ao buscar as notificações.`)
	}
}
