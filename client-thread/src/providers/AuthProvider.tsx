import React, { type ReactNode } from 'react'
import type { User } from "../models/User.ts";
import { AuthContext } from "../context/AuthContext.tsx";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = React.useState<User | null>(null)
    const [token, setToken] = React.useState<string | null>(null)

    const login = (user: User, token: string) => {
        setUser(user)
        setToken(token)
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("token", token)
    }

    const logout = () => {
        setUser(null)
        setToken(null)
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }

    return <AuthContext.Provider value={{ user, token, login, logout }}>
        {children}
    </AuthContext.Provider>
}