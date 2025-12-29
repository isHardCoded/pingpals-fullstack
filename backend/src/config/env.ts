import { AppError } from '../errors/app.js';

function requireEnv(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new AppError(`Environment variable ${key} is not defined`, 500);
  }

  return value;
}

export const JWT_ACCESS_SECRET = requireEnv('JWT_ACCESS_SECRET');
export const JWT_REFRESH_SECRET = requireEnv('JWT_REFRESH_SECRET');
export const REFRESH_TOKEN_MAX_AGE = Number(
  requireEnv('REFRESH_TOKEN_MAX_AGE'),
);
