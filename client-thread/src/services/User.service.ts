import { API_URL } from '../shared/constants.ts'

export const userService = {
	register: async ({ username, password }) => {
		const response = await fetch(`${API_URL}/users/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		})

		const data = await response.json()

		if (!response.ok) {
			throw new Error(data.error || 'Unknown error')
		}

		return data
	},

	login: async ({ username, password }) => {
		const response = await fetch(`${API_URL}/users/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		})

		const data = await response.json()

		if (!response.ok) {
			throw new Error(data.error || 'Unknown error')
		}

		return data
	},
}
