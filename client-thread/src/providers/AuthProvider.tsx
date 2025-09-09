import { type ReactNode, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { USER_SERVICE } from '../services/User.service'
import type { LoginData, User } from '../shared/types/User'

interface AuthProviderProps {
	children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<User | null>(null)
	const [token, setToken] = useState<string | null>(null)
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const savedUser = localStorage.getItem('user')
		const savedToken = localStorage.getItem('token')
		if (savedUser && savedToken) {
			setUser(JSON.parse(savedUser))
			setToken(savedToken)
		}
		setLoading(false)
	}, [])

	const login = async (data: LoginData) => {
		setLoading(true)
		setError(null)
		try {
			const response = await USER_SERVICE.login(data)
			setUser(response.user)
			setToken(response.token)

			localStorage.setItem('user', JSON.stringify(response.user))
			localStorage.setItem('token', response.token)
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message)
			} else {
				setError('Something went wrong')
			}
			setUser(null)
			setToken(null)
			throw err
		} finally {
			setLoading(false)
		}
	}

	const logout = () => {
		setUser(null)
		setToken(null)
		localStorage.removeItem('user')
		localStorage.removeItem('token')
	}

	return (
		<AuthContext.Provider
			value={{ user, token, login, logout, loading, error }}
		>
			{!loading && children}
		</AuthContext.Provider>
	)
}
