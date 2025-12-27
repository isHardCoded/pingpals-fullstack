import jwt from 'jsonwebtoken';
import { Token } from '../models/Token/Token.js';

export class TokenService {
  generateTokens(payload: { id: number }) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET!, {
      expiresIn: '15m',
    });

    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
      expiresIn: '30d',
    });

    return { accessToken, refreshToken };
  }

  async saveRefreshToken(userId: number, token: string) {
    await Token.create({ userId, token });
  }
}
