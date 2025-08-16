import React from 'react'
import { AuthContext } from "../context/AuthContext.tsx";

export const useAuth = () => {
    return React.useContext(AuthContext)
}