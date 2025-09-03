import React from 'react'
import type { AuthData } from "../models/User.ts";

interface AuthContextProps {
    user: AuthData | null;
    token: string | null,
    login: (user: AuthData, token: string | null) => void,
    logout: () => void,
}

export const AuthContext = React.createContext<AuthContextProps>({
    user: null,
    token: null,
    login: () => {},
    logout: () => {},
})
