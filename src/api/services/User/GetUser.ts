import axios from 'axios'
import { User } from '@/types/api'

export const GetUser = async (username: string): Promise<User | Error> => {
	try {
		const { data } = await axios<User>(
			`https://api.github.com/users/${username}`
		)
		return data
	} catch (error) {
		return new Error(`Houve um erro ao buscar o usuário`)
	}
}
