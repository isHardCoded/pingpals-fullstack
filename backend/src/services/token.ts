import jwt from 'jsonwebtoken';
import { Token } from '../models/Token/Token.js';
import { AppError } from '../errors/app.js';
import { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } from '../config/env.js';

export class TokenService {
  generateTokens(payload: { id: number }) {
    const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, {
      expiresIn: '15m',
    });

    const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, {
      expiresIn: '30d',
    });

    return { accessToken, refreshToken };
  }

  async saveRefreshToken(userId: number, token: string) {
    await Token.create({ userId, token });
  }

  validateRefreshToken(token: string) {
    return jwt.verify(token, JWT_REFRESH_SECRET);
  }

  async findRefreshToken(token: string) {
    return Token.findOne({ where: { token } });
  }

  async removeRefreshToken(token: string) {
    return Token.destroy({ where: { token } });
  }
}
