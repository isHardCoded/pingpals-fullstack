import type { LoginData, RegisterData } from "../models/User.ts";
import { API_URL } from "../constants.ts";

export const userService = {
    register: async ({ username, password }: RegisterData) => {
        const response = await fetch(`${API_URL}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Unknown error');
        }

        return data;
    },

    login: async ({ username, password }: LoginData) => {
        const response = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Unknown error');
        }

        return data;
    }
}