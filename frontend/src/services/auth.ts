import { httpClient } from '../api/http-client';
import { API_ENDPOINTS } from '../api/endpoints';

export interface RegisterDto {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface LoginDto {
  username: string;
  password: string;
}

export interface User {
  id?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}

export interface RefreshResponse {
  accessToken: string;
}

export const AuthService = {
  async register(data: RegisterDto): Promise<User> {
    const response = await httpClient.post(API_ENDPOINTS.AUTH.REGISTER, data);
    return response.data.data;
  },

  async login(data: LoginDto): Promise<LoginResponse> {
    const response = await httpClient.post(API_ENDPOINTS.AUTH.LOGIN, data);
    return response.data;
  },

  async refresh(): Promise<RefreshResponse> {
    const response = await httpClient.post(API_ENDPOINTS.AUTH.REFRESH);
    return response.data;
  },

  async logout(): Promise<void> {
    await httpClient.post(API_ENDPOINTS.AUTH.LOGOUT);
  },
};
