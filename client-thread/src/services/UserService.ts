import type {User} from "../models/User.ts";
import { API_URL } from "../contants.ts";

export const userService = {
    register: async ({ username, password }: User) => {
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

    login: async ({ username, password }: User) => {
        const response = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json();
    }
}