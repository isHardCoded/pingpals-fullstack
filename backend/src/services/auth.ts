import { UserService } from './user.js';
import { LoginUserDto } from '../dto/user/login.js';
import { RegisterUserDto } from '../dto/user/register.js';
import { AppError } from '../errors/app.js';
import { TokenService } from './token.js';

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

  login = (data: LoginUserDto) => {
    const user = this.userService.getUser(data);

    if (!user) {
      throw new AppError('Invalid credentials', 401);
    }

    // TODO: сделать проверку пароля, jwt hash
    return user;
  };
}
