import { UserService } from './user.js';
import { LoginUserDto } from '../dto/user/login.js';
import { RegisterUserDto } from '../dto/user/register.js';
import { AppError } from '../errors/app.js';
import { TokenService } from './token.js';

import { Jwt, JwtPayload } from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const SALT = 10;

export class AuthService {
  constructor(
    private userService: UserService,
    private tokenService: TokenService,
  ) {}

  register = async (data: RegisterUserDto) => {
    const hash = await bcrypt.hash(data.password, SALT);
    return this.userService.create({ ...data, password: hash });
  };

  login = async (data: LoginUserDto) => {
    const user = await this.userService.getUser({ username: data.username });

    if (!user) {
      throw new AppError('Invalid credentials', 401);
    }

    const isValid = await bcrypt.compare(data.password, user.password);

    if (!isValid) {
      throw new AppError('Invalid credentials', 401);
    }

    const tokens = this.tokenService.generateTokens({ id: user.id });

    return { user, ...tokens };
  };

  async refresh(refreshToken: string) {
    if (!refreshToken) {
      throw new AppError('Unauthorized', 401);
    }

    const payload = this.tokenService.validateRefreshToken(
      refreshToken,
    ) as JwtPayload;
    const tokenFromDb = await this.tokenService.findRefreshToken(refreshToken);

    if (!payload || !tokenFromDb) {
      throw new AppError('Unauthorized', 401);
    }

    await this.tokenService.removeRefreshToken(refreshToken);

    const tokens = this.tokenService.generateTokens({ id: payload.id });
    await this.tokenService.saveRefreshToken(payload.id, tokens.refreshToken);

    return tokens;
  }

  async logout(refreshToken: string) {
    await this.tokenService.removeRefreshToken(refreshToken);
  }
}
