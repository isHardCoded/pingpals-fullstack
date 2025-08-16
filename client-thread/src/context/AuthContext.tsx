import React from 'react'
import type { User } from "../models/User.ts";

interface AuthContextProps {
    user: User | null;
    token: string | null,
    login: (user: User, token: string) => void,
    logout: () => void,
}

export const AuthContext = React.createContext<AuthContextProps>({
    user: null,
    token: null,
    login: () => {},
    logout: () => {},
})