import { createContext, useContext } from 'react'
import type { LoginData, User } from '../shared/types/User'

export interface AuthContextType {
	user: User | null
	token: string | null
	login: (data: LoginData) => Promise<void>
	logout: () => void
	loading: boolean
	error: string | null
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}
