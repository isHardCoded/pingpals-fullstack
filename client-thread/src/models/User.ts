export type User = {
    id: number;
    username: string;
    password: string;
}

export type AuthData = {
    id: number;
    username: string;
    token: string | null;
}

export type LoginData = {
    username: string;
    password: string;
}

export type RegisterData = {
    username: string;
    password: string;
}