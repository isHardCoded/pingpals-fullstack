import { API_URL } from '../shared/constants.ts'
import type { LoginData, RegisterData } from '../shared/types/User.ts'

export const USER_SERVICE = {
	register: async (data: RegisterData) => {
		const response = await fetch(`${API_URL}/users/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		const responseData = await response.json()

		if (!response.ok) {
			throw new Error(responseData.error || 'Unknown error')
		}

		return responseData
	},

	login: async (data: LoginData) => {
		const response = await fetch(`${API_URL}/users/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		const responseData = await response.json()

		if (!response.ok) {
			throw new Error(responseData.error || 'Unknown error')
		}

		return responseData
	},
}
