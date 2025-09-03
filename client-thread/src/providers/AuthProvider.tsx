import React, { type ReactNode } from 'react'
import type { AuthData } from "../models/User.ts";
import { AuthContext } from "../context/AuthContext.tsx";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = React.useState<AuthData | null>(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    })
    const [token, setToken] = React.useState<string | null>(() => {
        const storedToken = localStorage.getItem("token");
        return storedToken ? JSON.parse(storedToken) : null;
    })

    const login = (user: AuthData, token: string | null) => {
        setUser(user)
        setToken(token)
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("token", JSON.stringify(user.token));
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